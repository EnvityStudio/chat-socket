
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
var cors = require('cors')
// chat application components
// var routes = require();
var ioServer = require('./app/socket')(app);
var logger = require('./app/logger');


// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cors());

/** Routers */
const authRouters = require('./app/routes/auth.js');



/** Router Definition */
app.use('/api/auth', authRouters);

/** Handing wrong url */
app.get('/*', function (req, res) {
    res.status(404).sendFile(process.cwd() + '/app/views/404.htm');
})

// Set the port number
var port = 3000;

ioServer.listen(port);
console.log("server is running!!!!!!!!!!");


