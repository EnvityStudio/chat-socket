'use strict'
/**
 * connect to the database mongodb
 * @author Thuan Envity
 * @date 2019/11/14
 */
var config = require('../config');
var logger = require('../logger');
var Mongoose = require('mongoose');

// Connect to the database
// construct the database URI and encode username and password.
var dbURI = "mongodb://" + 
			encodeURIComponent(config.db.username) + ":" + 
			encodeURIComponent(config.db.password) + "@" + 
			config.db.host + ":" + 
			config.db.port + "/" + 
            config.db.name;
logger.info("dbURI: "+dbURI);
Mongoose.connect(dbURI, { useCreateIndex: true, useNewUrlParser: true , useUnifiedTopology: true});

// Throw an error if the connection fails
Mongoose.connection.on('error', function(err) {
	if(err) throw err;
});

// mpromise (mongoose's default promise library) is deprecated, 
// Plug-in your own promise library instead.
// Use native promises
Mongoose.Promise = global.Promise;

module.exports = { Mongoose, 
	models: {
		room: require('./schemas/room.js')
	}
};
