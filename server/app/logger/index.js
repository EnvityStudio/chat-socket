'use strict'
/**
 * @author Thuan Envity
 * @date 2019/11/14
 */
var winston = require('winston');
// define log 
var logger = winston.createLogger({
    transports:[
        new (winston.transports.File)({
            level: 'debug',
            json: true,
            filename: "./debug.log",
            handleExceptions:true
        }),
        new (winston.transports.Console)({
            level: 'debug',
            json: true,
            handleExceptions: true
        })
    ],
    exitOnError: false
});
module.exports = logger;


