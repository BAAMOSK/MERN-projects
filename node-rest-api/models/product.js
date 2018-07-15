const mongoose = require('mongoose');

//SCHEMA OBJECT
const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true }
});

//MODEL GOES TO ROUTES
module.exports = mongoose.model('Product', productSchema);
