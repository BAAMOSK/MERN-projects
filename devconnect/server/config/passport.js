const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const { secretKey } = require('./keys');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secretKey;

//PASSPORT.USE PASSES TOKEN TO PASSPORT.AUTHENTICATE
module.exports = passport => {
    passport.use(
        //PAYLOAD DATA COMES FROM CALLBACK
        new JwtStrategy(opts, (jwt_payload, done) => {
            User.findById(jwt_payload.id)
                .then(user => {
                    return user ? done(null, user) : done(null, false);
                })
                .catch(err => console.log(err));
        })
    );
};
