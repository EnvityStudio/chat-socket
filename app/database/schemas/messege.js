'use strict'
/**
 * Define schema message
 * @author Thuan Envity
 * @date 2019/11/15
 */

 var Mongoose = require('mongoose');

 var message = new Mongoose.Schema({
     created_by: {type: String, required: true},
     to_username: {type: String},
     message: {type: String},
     is_viewed 
 });