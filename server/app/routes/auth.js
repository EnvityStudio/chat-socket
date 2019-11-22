'use strict'
/**
 * @author Thuan Envity
 * @date 2019/11/21
 */
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
var User = require('../models/user.js');

const { checkLoginFields } = require('../middleware/authenticate.js');

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

router.get('/test',(req,res)=>{
    res.status(200).send({success: true, msg: 'Successssssssssssssss!!!'});
});

module.exports = router;

