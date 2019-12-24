/**
 * @author Thuan Envity
 * @date 2019/12/09
 */
const _ = require('lodash');
const express = require('express');
const router = express.Router();
const passport = require('passport');
var Room = require('../models/room');

/** Middleware */
const { checkLoginFields, createErrorObject, checkToken } = require('../middleware/authenticate.js');

// rooms
/**
 * @description GET /api/room/getAllRooms
 */
router.get('/getAllRooms', passport.authenticate('jwt', { session: false }), (req, res) => {
	Room.find((err, rooms) => {
		if (err) throw err;
		console.log("getAllRooms successfully !!");
		res.status(200).send({ rooms });
	});
});
/**
 * Create new room
 * @description POST /api/room/createRoom
 */
router.post('/createRoom', passport.authenticate('jwt', { session: false }), (req, res) => {
	console.log("/createRoom");
	let errors = [];
	var newRoom = { name: req.body.room.name, user: req.body.room.idUser };
	Room.findOne({ name: req.body.room.name }, (err, room) => {
		if (err) throw err;
		if (room) {
			errors.push({ param: 'room_name_taken', msg: 'Roomname already taken' });
			res.status(400).send({ errors: createErrorObject(errors) });
		}
		else {
			Room.createRoom(newRoom, (err, roomInfo) => {
				if (err) throw err;
				res.status(200).send({ msg: 'Successfully', room: roomInfo });
			})
		}

	});

})

router.put('/update', passport.authenticate('jwt', { session: false }), (req, res) => {
	console.log("update Room");
	req.check('new_room_name').isString().isLength({ min: 3, max: 20 }).withMessage('New Room Name must be between 3 and 20 characters');
	let errors = req.validationErrors();
	if (errors.length > 0) {
		return res.status(400).send({ errors: createErrorObject(errors) });
	}
	// const room

})
module.exports = router;