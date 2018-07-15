const express = require('express');
const router = express.Router();
const app = express(express);
const Product = require('../../models/product');

router.get('/', (req, res) => {
    Product
        .find()
        //SELECT will only return those fields
        .select('_id name price')
        .then(products => {
            if(products) {
                const response = {
                    count: products.length,
                    products: products.map(product => {
                        const { _id, name, price } = product;
                        return { 
                            _id,
                            name,
                            price,
                            request: {
                                type: 'GET',
                                url: `http://localhost:5000/api/products/${_id}`
                            }
                        }
                    })
                }
                return res.json(response);
            }
            return res.status(404).json({error: "No products"});
        })
        .catch(err => res.status(404).json(err));
});

//READ
router.get('/:product_id', (req, res) => {
    const id = req.params.product_id;

    //Product is the collection
    Product.findById(id)
        .then(product => {
            if(!product) {
                return res.status(401).json({ error: "Product not found"})
            }
            res.json(product)
        })
        .catch(err =>
            res.status(404).json(err)
        );
});

//CREATE
router.post('/', (req, res) => {
    const { name, price } = req.body;
    //create a new collection in Product object
    const product = new Product({ name, price });
    //product is the document
    (async () => {
        const item = await product.save().catch(err => res.status(404).json(err));
        const result = {
            item,
            request: {
                type: 'GET',
                url: `http://localhost:5000/api/products/${item._id}`
            }
        };
        return res.json(result);
    })();
});

//UPDATE
router.put('/', (req, res) => {
    res.json({ message: 'USED TO UPDATE A DOCUMENT' });
});

//MODIFY -- ONLY EXISTING DATA
router.patch('/:product_id', (req, res) => {
    const _id = req.params.product_id;

    //CHECK which fields to update
    const updateOps = {};
    for (const ops of req.body) {
        // one object per field to be changed
        // name || price        = req.body.value
        // propsName: 'name' || 'price', value: new value
        // this is key of key   = this is key value with new value
        updateOps[ops.propName] = ops.value;
    }

    Product
        .update({ _id }, { $set: updateOps })
        //.update({ _id }, { $set: { name: req.body.name, price: req.body.price } })
        .then(product => {
            if(product) {                
                return res.json(product);
            }
            return res.status(404).json({ error: "Product could not be updated"});
        })
        .catch(err => res.status(404).json(err));
});

//DELETE
router.delete('/:product_id', (req, res) => {
    const id = req.params.product_id;

    Product
        .findOneAndDelete(id)
        .then(product => {
            if(product) {
                return res.json(product);
            }
            return res.status(404).json({error: "Product not found"});
        })
        .catch(err => res.status(404).json(err));
});

//export router middleware
module.exports = router;
