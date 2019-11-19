'use strict'
/**
 * @author Thuan Envity
 * @date 2019/11/19
 */
var Room = require('../models/room.js');
/**
 * Encapsulates all code for emitting and listening to socket events 
 */
var ioEvents = function (io) {
    io.of('/rooms').on('connection', function (socket) {
        // Create a new room
        socket.on('createRoom', function (title) {
            Room.findOne({
                'title': title, function(err, room) {
                    if (err) throw err;
                    if (room) {
                        socket.emit('updateRoomsList', { error: 'Room title already exit!' });
                    } else {
                        Room.createRoom({ title: title }, function (err, newRoom) {
                            if (err) throw err;
                            socket.emit('updateRoomsList', newRoom);
                            socket.broadcast.emit('updateRoomsList', newRoom);
                        });
                    }
                }
            });
        });
    });
    // when socket is exits
    socket.on('disconnect',function(){
        console.log("socket is disconnect");
    });
}

var init = function(app){
    var server = require('http').Server(app);
    var io = require('socket.io')(server);
    // Force Socket.io to ONLY use 'websockets'; No long polling
    io.set('transports',['websocket']);

    // Define all Events
    ioEvents(io);
    return server;
}


module.exports = init;