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
	var conn = { idRoom: "son", name: "son Test"};
    var newRoomModel = new roomModel(conn);
    console.log("Insert db successfully");
    console.log(newRoomModel)
	newRoomModel.save(callback);
}
module.exports = {
    addRoom
}