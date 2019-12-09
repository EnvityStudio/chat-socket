'use strict'
/**
 * config passport
 * @author Thuan Envity
 * @date 2019/12/09
 */
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/user');

let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretKey: process.env.JWT_SECRET
};

module.exports = function (passport) {
    passport.serializeUser((user, done) => done(null, { id: user.id }));

    passport.deserializeUser((user, done) => {
        User.findById(user.id).select('-password').then(user => {
            done(null, { details: user });
        });
    });

    passport.use(new JwtStrategy(opts, (payload, done) => {
        User.findById(payload._id).select('-password').then(user => {
            if (user) {
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        });
    }));
};