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
    const user = await User.findOne({ 'username': req.body.username });
    if (!user) {
        errors.push({ param: 'username', msg: 'Invalid Details Entered' });
    }
    else {
        if (req.body.password !== null && !await user.isValidatePassword) {
            errors.push({ param: 'username', msg: 'Invalid Details Entered' });
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
            if(err){
                return res.json({})
            }
        });
    }
}


module.exports = {
    checkLoginFields,
    createErrorObject,
    checkToken
}