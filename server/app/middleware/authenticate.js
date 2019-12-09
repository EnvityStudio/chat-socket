/**
 * @author Thuan Envity
 */
'use strict'
var User = require('../models/user.js');
var jwt = require('jsonwebtoken');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const checkLoginFields = async (req, res, next) => {
    let errors = [];
    User.findOne({ username: req.body.username }, async function (err, user) {
        if (err) throw err;
        if (!user) {
            errors.push({ param: 'username', msg: 'Invalid Details Entered' });
        }
        else {
            if (req.body.password !== null && !await user.isValidatePassword(req.body.password)) {
                errors.push({ param: 'username', msg: 'Invalid Details Entered' });
            }
        }
        if (errors.length !== 0) {
            res.status(400).send({
                errors: createErrorObject(errors)

            });
        }
        else {
            next();
        }
    });
}

//
/**
 * 
 * @param {*} errors 
 */
const createErrorObject = errors => {
    const errorObject = [];
    errors.forEach(error => {
        let err = {
            [error.param]: error.msg
        };
        errorObject.push(err);
    });

    return errorObject;
};

//
const checkToken = (req, res, next) => {
    let token = req.headers['authorization'];
    if (token) {
        if (token.startsWith('Bearer ')) {
            // remove bearer from string
            token = token.slice(7, token.length);
        }
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    success: false,
                    message: 'Token is invalid'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    }
    else {
        return res.status(401).json({
            success: false,
            message: 'Auth token is not supplied'
        });
    }

}


module.exports = {
    checkLoginFields,
    createErrorObject,
    checkToken
}