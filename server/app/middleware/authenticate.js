/**
 * @author Thuan Envity
 */
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
    console.log("Aaa: " + req.body.username);
    await User.findOne({ username: req.body.username }, function (err, user) {
        if (err) throw err;

        if (!user) {
            errors.push({ param: 'username', msg: 'Invalid Details Entered' });
        }
        else {
            let isValidPassword = user.isValidatePassword(req.body.password);
            if (!isValidPassword) {
                errors.push({ param: 'password', msg: 'Invalid Details Entered' });
            }
        }

        if (errors.length !== 0) {
            res.send({
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
        jwt.verify(token, "secret", (err, decoded) => {
            if (err) {
                return res.json({
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
        return res.json({
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