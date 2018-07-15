const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const validateProfileInput = require('../../validation/profile');
const validateExperienceInput = require('../../validation/experience');
const validateEducationInput = require('../../validation/education');
const jwt = passport.authenticate('jwt', {session: false});

//PROTECTED - Get current user
router.get('/', jwt, (req, res) => {
    const errors = {};
    
    Profile.findOne({ user: req.user.id })
        .populate('user', ['name', 'email'])
        .then(profile => {
            if(!profile) {
                errors.noProfile = 'There is no profile for this user';
                return res.status(404).json(errors);
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});

router.get('/all', (req, res) => {
    (async () => {
        const users = await Profile.find()
            .populate('user', ['name', 'avatar'])
            .catch(err => res.status(404).json(err));

        res.json(users);
    })();
});

router.get('/handle/:handle', (req, res) => {
    const errors = {};
    
    //GO TO PROFILES COLLECTION WHERE HANDLE === :HANDLE THEN => DOCUMENT
    Profile
        .findOne({ handle: req.params.handle })
        //JOIN FIELD FROM DOCUMENT -- USER IS DOCUMENT -- FROM USERS COLLECTION
        .populate('user', ['name', 'email'])
        //.exec() //EXEC RETURNS A PROMISE OBJECT
        .then(profile => {
            if(!profile) {
                errors.noProfile = "Profile does not exist";
                return res.status(404).json(errors);
            }
            return res.json(profile);
        }).catch(err => res.status(404).json(err));
});

router.get('/user/:user_id', (req, res) => {
    (async () => {
        const errors = {};
        const profile = await Profile
            .findOne({ user: req.params.user_id })
            .populate('user', ['name', 'avatar'])
            .exec()
            .catch(err => res.status(404).json(err));
        
        if(!profile) {
            errors.noProfile = 'Profile does not exist';
            return res.status(404).json(errors);
        }
        
        return res.send(profile);
    })();    
});

//PROTECTED - post to profile
router.post('/', jwt, (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const profileFields = {};
    profileFields.social = {};

    profileFields.user = req.user.id;
    
    const whiteList = ['handle', 'company', 'website', 'bio', 'status', 'location',
        'githubUsername', 'skills', 'youtube', 'twitter', 'instagram', 'facebook', 
        'linkedin' 
    ];
    const socialUrls = ['youtube', 'twitter', 'instagram', 'facebook', 'linkedin' ];

    profileFields.user = req.user.id;
    //DATA SENT FROM FORM -- IT IS THE PROFILE MODEL
    const inputData = Object.keys(req.body);

    for(key of inputData) {
        if(whiteList.includes(key)) {
            
            if(key === 'skills' && typeof req.body.skills !== 'undefined') {
                profileFields[key] = req.body.skills.split(',');
            }
            else if([...socialUrls].includes(key) && req.body[key]) {
                profileFields.social[key] = req.body[key];
            } 
            else if(req.body[key]) {
                profileFields[key] = req.body[key];
            }
        }
    }
    
    /*if(req.body.handle) profileFields.handle = req.body.handle;
    if(req.body.company) profileFields.company = req.body.company;
    if(req.body.youtube) profileFields.social.youtube = req.body.youtube;*/
    
    Profile.findOne({ user: req.user.id }).then(profile => {
        if(profile) {
           //UPDATE
           Profile
               .findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true })
               .then(profile => res.json(profile)); 
        } else { 
            //CREATE
            //CHECK FOR HANDLE -- ALIAS USERNAME
            Profile.findOne({ handle: profileFields.handle }).then(profile => {
                if(profile) {
                    errors.handle = 'That handle already exists';
                    res.status(400).json(errors);
                }
            });
            //RETURN PROMISE -- SAVE -- PASS VALUES TO --> MODEL FROM SCHEMA PROFILE
            new Profile(profileFields).save().then(profile => res.json(profile));
        }
    });
});

//PROTECTED
router.post('/education', jwt, (req, res) => {
    const { errors, isValid } = validateEducationInput(req.body);

    if(!isValid) {
        return res.status(404).json(errors);
    }

    Profile
        .findOne({ user: req.user.id })
        .then(profile => {
            const { school, fieldOfStudy, degree, from } = req.body;
            const newEdu = { school, fieldOfStudy, degree, from };

            profile.education.unshift(newEdu);
            profile.save().then(profile => {
                console.log('FROM DATABASE');
                return res.json(profile)
            });
        })
        .catch(err => res.status(404).json(err));
});

//PROTECTED
router.delete('/education/:edu_id', jwt, (req, res) => {
    const _id = req.params.edu_id;

    (async () => {
        const result = await Profile
            .findOneAndUpdate({ user: req.user.id}, { $pull: { "education" : { _id } } }, false)
            .catch(err => res.status(404).json(err));        

        return res.status(200).json({ success: true });
    })();
});

//PROTECTED
router.post('/experience', jwt, (req, res) => {
    const { errors, isValid } = validateExperienceInput(req.body);

    if(!isValid) {
        return res.status(404).json(errors);
    }

    Profile 
        .findOne({ user: req.user.id })
        .then(profile => {
            const { title, company, location, from, to, current, description } = req.body;
            const newExp = { title, company, location, from, to, current, description };

            profile.experience.unshift(newExp);
            profile.save().then(profile => {
                return res.json(profile); 
            });
        })
        .catch(err => res.status(404).json(err));
});

//PROTECTED
router.delete('/experience/:exp_id', jwt, (req, res) => {
    const _id = req.params.exp_id;

    Profile
        .findOneAndUpdate({ user: req.user.id }, { $pull: { "experience": { _id } } }, false)
        .then(entry => {
            if(entry) {
                return res.json(entry);
            }
            return res.status(404).json({ error: "Profile not found"});
        })
        .catch(err => res.status(404).json({ error: "Cast error" }));
});

module.exports = router;
