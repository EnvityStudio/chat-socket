/**
 * @author Thuan Envity
 * @date 
 */
const _ = require('lodash');
const express = require('express');
const router = express.Router();
const passport = require('passport');
var Message = require('../models/message');

/** Middleware */
const { checkLoginFields, createErrorObject, checkToken } = require('../middleware/authenticate.js');

// get messages for user
/**
 * @description GET /api/message/:to_user
 */
router.get('/:to_user', passport.authenticate('jwt', { session: false }), async (req, res) => {
	console.log("userID: "+req.user._id);
	console.log("getmessage: created_by: " + req.user._id + " to_username: " + req.params.to_user);
	const messages = await Message.find({
		$or: [{ created_by: req.user._id, to_username: req.params.to_user },
		{ created_by: req.params.to_user, to_username: req.user._id }]
	});
	console.log(messages);
	if (messages) {
		return res.status(200).send(messages);
	}
	else {
		return res.status(404).json({ error: 'No messages found' });
	}

});

// get messages for room
/**
 * @description GET /api/message/:room_id
 */
router.get('/:room_id', passport.authenticate('jwt', { session: false }), async (req, res) => {

});
module.exports = router;
