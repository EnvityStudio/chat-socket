'use strict'
/**
 * @author Thuan Envity
 * @date 2019/11/15
 */
var roomModel = require('../database').models.room;
/**
 * 
 * @param {*} room 
 * @param {*} callback 
 */
var addRoom = function(callback){
	var conn = { idRoom: "123", name: "Thuan Test"};
    var newRoomModel = new roomModel(conn);
	newRoomModel.save(callback);
}
module.exports = {
    addRoom
}