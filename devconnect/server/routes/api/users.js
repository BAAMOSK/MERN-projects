const express = require('express');
//ROUTER MAKES USE OF THE ROOT -- /api/users
const router = express.Router();
const User = require('../../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const { secretKey } = require('../../config/keys');

router.get('/', (req, res) => {
    res.json({ name: 'Tee', age: '17' });
});

router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email })
        .then(user => {
            if(user) {
                errors.email = 'Email already exists';
                return res.status(400).json(errors);
            } else {
                let avatar = gravatar.url(req.body.email, {
                    s: '200',
                    r: 'pg',
                    d: 'mm'
                });

                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    avatar,
                    password: req.body.password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        //if(err) throw err;
                    
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
            }
        });
});

router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const { email, password } = req.body

    User
        .findOne({ email })
        //CHECK USER
        .then(user => {
            if(!user) {
                errors.email = "Unauthorized access";
                return res.json({ email: errors.email });
            }

            bcrypt
                .compare(password, user.password)
                .then(isMatch => {                    
                    if(isMatch) {
                        const { id, name, avatar } = user;
                        //PAYLOAD FROM DATABASE
                        const payload = { id, name, avatar };
                        const expiresIn = 18000;
                    
                        //GENERATE TOKEN -- BROWSER STORES TOKEN --
                        jwt.sign(payload, secretKey, { expiresIn }, (err, token) => {
                            return res.json({ success: true, token: `Bearer ${token}`, data: payload });
                        });
                    } else {
                        errors.password = "Wrong password";
                        return res.status(400).json({ password: errors.password });
                    }                    
                })
                .catch(err => res.status(404).json(err));            
        })
        .catch(err => res.status(404).json(err));
});

//PROTECTED REQUEST PASSPORT.AUTHENTICATE VERIFIES EXTRACTED TOKEN FROM PASSPORT.USE
router.get('/current',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { id, name, email } = req.user;
        res.json({ id, name, email });
    }
);

module.exports = router;
