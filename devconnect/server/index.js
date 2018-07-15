const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const passport = require('passport');
const app = express();

//MIDDLEWARES
app.use(bodyParser.json());
app.use(passport.initialize());
require('./config/passport')(passport);

//DATABASE CONNECTION
mongoose
    .connect(db)
    .then(() => {
        console.log('Database connected');
    })
    .catch(err => {
        console.log(err);
    });

//ROUTES
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server running on PORT: ', PORT));

