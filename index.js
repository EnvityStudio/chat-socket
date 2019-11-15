// // express module
// const express  = require("express");

// //
// const app = express();
// const http = require("http").Server(app);
// // socket io 
// const io = require("socket.io");
// const port = 500;
// const socket = io(http);
// // create an event listener
// // to listen to messages
// socket.on("connection",(socket)=>{
//     console.log("user connected");
// });
// // wire up the server to listen to our port 500
// http.listen(port,()=>{
//     console.log("connected to port: "+port);
// });
'use strict'
/**
 * connect to the database mongodb
 * @author Thuan Envity
 * @date 2019/11/14
 */
var db = require('./app/database/index.js');
var Room = require('./app/models/room.js');
Room.addRoom(function (err,newRoom){
    if (err) console.log(err);
    else {
        console.log("aaaa");
        console.log(newRoom)
    }
});
console.log(db);
console.log(db.Mongoose.readyState);