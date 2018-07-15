const express = require('express');
const app = express(express);
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { MONGO_DB } = require('./config/keys');

const PORT = process.env.PORT || 5000;
const productRoutes = require('./routes/api/products');

app.use(morgan('dev'));
app.use(bodyParser.json());

mongoose.connect(MONGO_DB);

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //USE * FOR EVERYONE -- USE TEEMAK.WEBSITE FOR ONLY ME
    /*res.header("Access-Control-Allow-Headers", 'Origin, X-requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }*/
    next();
});

//FIRST ARG PATH -- SECOND ARG MIDDLEWARE
app.use('/api/products', productRoutes);

/*app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});*/

app.get('/', (req, res) => {
    res.send({name: 'Tee', age: 28});
});


app.listen(PORT, () => { console.log(`Server is running on PORT: ${PORT}`);});
