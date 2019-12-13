'use strict'
/**
 * @author Thuan Envity
 * @date 2019/11/19
 */
var Room = require('../models/room.js');
const { ADD_MESSAGE } = require('../actions/socketio');
/**
 * Encapsulates all code for emitting and listening to socket events 
 */
let userTypings = {};
var clientConnects = [];
var ioEvents = function (io) {
	io.on('connection', function (socket) {
		/** User login successfully */
		socket.on('userOnline', data => {
			clientConnects.push({ socketID: socket.id, userID: data.id });
			socket.join(data.id);
		});
		/** User typing Events */
		socket.on('userTyping', data => {
			socket.broadcast.to(data.user._id).emit('receivedUserTyping', data.user._id)
		});
		/** New Message Event */
		socket.on('newMessage', async data => {
			const newMessage = await ADD_MESSAGE(data);
			// Emit data back to the client for display 
			socket.broadcast.to(data.to_username).emit('receivedNewMessage', newMessage);
		});

		/** Delete Room Event */
		/** Add Room Event */
		/** Room Updated Event */
		/** Reconnected: Update Reconnected User in Room */

		// when socket is exits
		socket.on('disconnect', function () {
			clientConnects = clientConnects.filter((user) => {
				return user.socketID !== socket.id;
			});
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