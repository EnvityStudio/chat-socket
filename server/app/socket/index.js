'use strict'
/**
 * @author Thuan Envity
 * @date 2019/11/19
 */
var Room = require('../models/room.js');
const {ADD_MESSAGE} = require('../actions/socketio');
/**
 * Encapsulates all code for emitting and listening to socket events 
 */
let userTypings = {};
var ioEvents = function (io) {
	io.on('connection', function (socket) {
		// Create a new room
		// socket.on('createRoom', function (infoRoom) {
		//     console.log("infoRoom");
		//     console.log(JSON.stringify(infoRoom));
		//     Room.findOne(infoRoom
		//     , function (err, room) {
		//         if (err) throw err;
		//         if (room) {
		//             socket.emit('updateRoomsList', { error: 'Room title already exit!' });
		//         } else {
		//             Room.createRoom(infoRoom, function (err, newRoom) {
		//                 console.log("newRoommmmmm");
		//                 console.log(newRoom);
		//                 if (err) throw err;
		//                 socket.emit('updateRoomsList', newRoom);
		//                 socket.broadcast.emit('updateRoomsList', newRoom);
		//             });
		//         }
		//     });
		// });
		//
		/** User typing Events */
		socket.on('userTyping', data => {
			socket.broadcast.to(data.user._id).emit('receivedUserTyping', data.user._id)
		});
		/** New Message Event */
		socket.on('newMessage', async data =>{
			const newMessage = await ADD_MESSAGE(data);
			console.log("===newMessage===");
			console.log(newMessage);
			// Emit data back to the client for display 
			io.to(data.userReceive._id).emit('receivedNewMessage',JSON.stringify(newMessage));
		});

		/** Delete Room Event */
		/** Add Room Event */
		/** Room Updated Event */
		/** Reconnected: Update Reconnected User in Room */

		// when socket is exits
		socket.on('disconnect', function () {
			console.log("socket is disconnect");
		});
	});

}

var init = function (app) {
	var server = require('http').Server(app);
	var io = require('socket.io')(server);
	// Force Socket.io to ONLY use 'websockets'; No long polling
	// io.set('transports', ['websocket']);

	// Define all Events
	ioEvents(io);
	return server;
}


module.exports = init;