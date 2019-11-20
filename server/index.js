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
// connect to MongoDB
var db = require('./app/database/index.js');
// chat application dependencies 
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
// chat application components
// var routes = require();
var ioServer = require('./app/socket')(app);
var logger = require('./app/logger');

// Set the port number
var port = 3000;

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));


ioServer.listen(port);
console.log("server is running!!!!!!!!!!");








// var Room = require('./app/models/room.js');
// var User = require('./app/models/user.js');
// var credentials = { 'username': 'thuannv201911', 'password': 'thuannv2014141','email':'abbc@gmail.com' };

// // User.create(credentials,function(err,data){
// //     if (err) console.log(err);
// //     console.log(data);
// // })

// User.findOne({ username: 'thuannv201911' }, function (err, user) {
//     if (err) { console.log("something went wrong"); }
//     console.log("userrrrrrrr");
//     console.log(user);
//     if (!user) {
//         console.log("dont match");
//     }
//     console.log(user);
//     user.validatePassword('thuannv2014141ew', function (err, isMatch) {
//         if (err) { console.log("someting wrong"); }
//         if (!isMatch) {
//             console.log(isMatch);
//             console.log("password wrong");
//         }
//         console.log("ssuccesssssssss");
//     });
// });



// // console.log("db is connecting");
// // Room.addRoom(function (err,newRoom){
// //     if (err) console.log(err);
// //     else {
// //         console.log("aaaa");
// //         console.log(newRoom)
// //     }
// // });
// // console.log(db);
// // console.log(db.Mongoose.readyState);
// //