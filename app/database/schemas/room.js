'use strict'
/**
 * Define model room
 * @author Thuan Envity
 * @date 2019/11/14
 * 
 */
var Mongoose = require('mongoose');

var roomSchema = new Mongoose.Schema({
	idRoom: { type: String, required: true },
	name: { type: String, required: true }
}, {
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	}
});

var roomModel = Mongoose.model('room', roomSchema, 'room');
module.exports = roomModel;