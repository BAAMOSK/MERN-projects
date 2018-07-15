const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = passport.authenticate('jwt', { session: false });

const validatePostInput = require('../../validation/post');
const Profile = require('../../models/Profile');
const Post = require('../../models/Post');

router.get('/', (req, res) => {
    Post
        .find()
        .sort({ date: -1 })
        .then(posts => res.json(posts))
        .catch(err => res.status(404).json(err));
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Post
        .findById({ id })
        .then(post => {
            return res.json(post);
        })
        .catch(err => res.status(404).json(err));
});

router.post('/', jwt, (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    if(!isValid) {
        return res.status(404).json(errors);
    }

    const { text, name, avatar, user } = req.body;
    const newPost = new Post({
        text,
        name,
        avatar,
        user
    });

    newPost.save().then(post => res.json(post));
});

router.delete('/:id', jwt, (req, res) => {
    const _id = req.params.id;

    

    Post
        .findOneAndRemove({ _id })
        .then(() => {
            return res.json({ success: true });
        })
        .catch(err => res.status(404).json(err));
});

module.exports = router;
