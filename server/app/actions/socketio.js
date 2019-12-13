/**
 * @author Thuan Envity
 */
const mongoose = require('mongoose');
var User = require('../models/user');
var Message = require('../models/message');
var Room = require('../models/room');

//
module.exports = {
	ADD_MESSAGE: async (data) => {
		const newMessage = { created_by: data.created_by, to_username: data.to_username, message: data.message };
		return Message.create(newMessage);
	},

}