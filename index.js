// express module
const express  = require("express");

//
const app = express();
const http = require("http").Server(app);
// socket io 
const io = require("socket.io");
const port = 500;
const socket = io(http);
// create an event listener
// to listen to messages
socket.on("connection",(socket)=>{
    console.log("user connected");
});
// wire up the server to listen to our port 500
http.listen(port,()=>{
    console.log("connected to port: "+port);
});