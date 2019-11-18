'use strict'
/**
 * Define schema message
 * @author Thuan Envity
 * @date 2019/11/15
 */

var Mongoose = require('mongoose');

var messageSchema = new Mongoose.Schema({
	created_by: { type: String, required: true },
	to_username: { type: String },
	message: { type: String, required: true },
	is_viewed: { type: Boolean }
}, {
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	}
});

var messageModel = Mongoose.model('message', messageSchema, 'message');
module.exports = messageModel;