'use strict'
/**
 * Define schema message
 * @author Thuan Envity
 * @date 2019/11/15
 */

var Mongoose = require('mongoose');

var messageSchema = new Mongoose.Schema({
	created_by: {
		 type: Mongoose.Schema.Types.ObjectId,
		 required: true, 
		 ref: 'user' 
	},
	to_username: { 
		type: Mongoose.Schema.Types.ObjectId,
		ref: 'user' 
	},
	message: {
		type: String,
		required: true,
		trim: true
	},
	file:{
		type: Buffer
	},
	room: {
		type: Mongoose.Schema.Types.ObjectId, 
		ref: 'room' 
	},
	is_viewed: {
		 type: Boolean 
	}
}, {
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	}
});

var messageModel = Mongoose.model('message', messageSchema, 'message');
module.exports = messageModel;