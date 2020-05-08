'use strict'
/**
 * Define schema message
 * @author Thuan Envity
 * @date 2020/05/04
 * 
 * 
 */

var Mongoose = require('mongoose');
var chatGroupSchema = new Mongoose.Schema({

	name: {
		type: String,
	},
	user_id: {
		type: Mongoose.Schema.Types.ObjectId,
		ref: 'user',
		required: true,
	},
	members: [
		{
			type: Mongoose.Schema.Types.ObjectId,
			ref: 'user',
			required: true,
		}
	],
	status: {
		type: Boolean,
		required: true
	}

}, {
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deleteAt: 'delete_at'
	}
});

var chatGroupsModel = Mongoose.model('chat_groups', chatGroupSchema, 'chat_groups');
module.exports = chatGroupsModel;