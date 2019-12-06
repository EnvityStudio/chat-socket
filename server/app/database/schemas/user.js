'use strict'
/**
 * @author Thuan Envity
 * @date 2019/11/18
 */
var Mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

const SALT_WORK_FACTOR = 10;

/**
 * Every user has a username and password
 * If the user registered via username and password  then social should be null
 * 
 * If the user registered via social authentication, then password should be null and the social should be assigned the value 
 *
 * Hash user's password
 */
var UserSchema = new Mongoose.Schema({
	username: { 
		type: String, 
		required: true, 
		trim: true, 
		unique: true, 
		minlength: ['5', 'Username should be greater than 5 characters'],
		maxlength: ['15', 'Username should be less than 15 characters'] 
	},
	password: { 
		type: String, 
		default: null 
	},
	social: { 
			id: 
				{ 
					type: String,
					default: null 
				}, 
			image: 
				{
					type: String, 
					default: null
				},
			email: 
				{
					type: String,
					default: null 
				} 
		},
	email: { 
			type: String, 
			trim: true,
			unique: true 
		}
}, {
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	}
});

/**
 * Create an instance method to validate user's password
 * This method will be used to compare the given password with the password stored in the database
 */

UserSchema.methods.isValidatePassword = function (password, callback) {	
	return bcrypt.compare(password, this.password);
};

/**
 * Before save a user document, Make sure: 
 * Hash user's password using the default 10 rounds for salt
 */
UserSchema.pre('save', function (next) {
	var user = this;
	//  only hash the password if it has been modified 
	if (this.password === '' && !this.isModified('password')) return next();
	bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
		if (err) return next(err);
		// hash the password using our new salt 
		bcrypt.hash(user.password, salt, function (err, hash) {
			if (err) return next(err);
			//override the clear text password with hashed one 
			user.password = hash;
			next();
		})
	})
})

var userModel = Mongoose.model('user', UserSchema, 'user');
module.exports = userModel;