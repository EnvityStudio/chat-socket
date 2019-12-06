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
var findOne = function (data, callback) {
    userModel.findOne(data, callback);
}
/**
 * 
 * @param {*} id 
 * @param {*} callback 
 */
var findById = function (id, callback) {
    userModel.findById(id, callback);
}

var findOrCreate = function (data, callback) {
    findOne({ 'social.id': data.id }, function (err, user) {
        if (err) throw err;
        if (user) return callback(err, user);
        else {

        }
    })
}
module.exports = {
    create,
    findOne,
    findById,
    findOrCreate
};