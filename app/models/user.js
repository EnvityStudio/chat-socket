/**
 * @author Thuan Envity
 * @date 2019/11/18
 */
var userModel = require("../database").models.user;

/**
 * 
 * @param {*} data 
 * @param {*} callback 
 */
var create = function (data, callback) {
    var newUser = new userModel(data);
    newUser.save(callback);
}
/**
 * 
 * @param {*} data 
 * @param {*} callback 
 */
var findOne = function (data, callback){
	userModel.findOne(data, callback);
}


module.exports = { create, findOne };