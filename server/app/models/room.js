'use strict'
/**
 * @author Thuan Envity
 * @date 2019/11/15
 */
var roomModel = require('../database').models.room;
var logger = require('../logger');
/**
 * 
 * @param {*} room 
 * @param {*} callback 
 */
var createRoom = function (data, callback) {
    logger.info("create new room");
    var newRoom = new roomModel(data);
    newRoom.save().then(room => {
        roomModel.populate(room, { path: 'user', select: ['username', 'email'] }, callback);
    });
}
/**
 * 
 * @param {*} data 
 * @param {*} callback 
 */
var findOne = function (data, callback) {
    roomModel.findOne(data, callback);
}

var find = function (data, callback) {
    roomModel.find(data, callback);
}
module.exports = {
    createRoom,
    findOne,
    find
}