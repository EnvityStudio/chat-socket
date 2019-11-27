'use strict'
/**
 * @author Thuan Envity
 * @date 2019/11/21
 */
const _ = require('lodash');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
var User = require('../models/user.js');

/** Middleware */
const { checkLoginFields, createErrorObject } = require('../middleware/authenticate.js');

/**
 * @description POST /login 
 */
router.post('/login', checkLoginFields, async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
        return res.status(404).send({
            error: 'No User Found'
        });
    }
    const token = jwt.sign(user.toObject(), "secret", { expiresIn: 18000 });
    res.status(200).send({ auth: true, token: `Bearer ${token}`, user });
});

router.post('/logout', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
        return res.status(404).send({
            error: 'No User Found'
        });
    }
    res.status(200).send({ success: true });
});

router.get('/test', (req, res) => {
    res.status(200).send({ success: true, msg: 'Successssssssssssssss!!!' });
});

router.post('/register', async (req, res) => {
    let errors = [];
    User.findOne({ username: req.body.username }, function (err, user) {
        if(err) throw err;
        if (user) {
            errors.push({ param: 'email', msg: 'Email is already taken' });
            console.log("error");
            res.send({
                errors: createErrorObject(errors)
            }).end();
        }
        else {
            const credentials = {
                username: req.body.username,
                password: req.body.password
            };
            User.create(credentials, function (err, userData) {
                if (err) {
                    console.log("create user error");
                    res.send({
                        err,
                        error: 'Something went wrong, Please check the fields again'
                    });
                }
                const user = _.omit(userData.toObject(), ['password']);
                const token = jwt.sign(user, "secret", {
                    expiresIn: 18000
                });
                console.log("Register successfully");
                res.status(200).send({
                    auth: true,
                    token: `Bearer ${token}`,
                    user
                });
            });
        }
    });
});

module.exports = router;

