/**
 * @author 2019/12/06
 * @author Thuan Envity
 */
const _ = require('lodash');
const express = require('express');
const router = express.Router();
var User = require('../models/user');

/** Middleware */
const { checkLoginFields, createErrorObject, checkToken } = require('../middleware/authenticate.js');

// users
/**
 * @description /api/user/getAllUsers
 */
router.get('/getAllUsers', checkToken, (req, res) => {
	User.find(function (err, users) {
		if (err) throw err;
		console.log("getAllUser successfully !!!");
		res.status(200).send({ users });
	});
});
//
/**
 * @description /api/user/getCurrentUser
 */
router.get('/getCurrentUser', checkToken, (req, res) => {
	User.getUser((err, user) => {
		if (err) throw err;
		res.status(200).send({ user });
	});
})
//

module.exports = router;