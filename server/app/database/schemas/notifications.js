'use strict'
/**
 * Define schema message
 * @author Thuan Envity
 * @date 2020/05/04
 * 
 * 
 */

var Mongoose = require('mongoose');
var notifySchema = new Mongoose.Schema({

	user_id: {
		type: Mongoose.Schema.Types.ObjectId,
		ref: 'user',
		required: true,
	},
	contact_id: {
		type: Mongoose.Schema.Types.ObjectId,
		ref: 'user',
		required: true,
	},
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

var notifyModel = Mongoose.model('notify', notifySchema, 'notify');
module.exports = notifyModel;