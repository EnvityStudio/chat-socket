'use strict'
/**
 * Define model room
 * @author Thuan Envity
 * @date 2019/11/14
 * 
 */
var Mongoose = require('mongoose');

var roomSchema = new Mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		minlength: ['3', 'Room name should be greater than 3 characters'],
		maxlength: ['20', 'Room name should be less than 20 characters']
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'user',
		default: null
	},
	users: [
		{
			_id: false,
			lookup: {
				type: Schema.Types.ObjectId,
				required: true,
				ref: 'user'
			},
			socketId: {
				type: String,
				required: true
			}
		}
	]
}, {
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	}
});

var roomModel = Mongoose.model('room', roomSchema, 'room');
module.exports = roomModel;