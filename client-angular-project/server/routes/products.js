var express = require('express');
var router = express.Router();
var Product = require('../models/productModel');

// Request URL: http://localhost:3000/products
router.get('/', function (req, res, next) {
    Product.find((err, data) => {
        if (err) throw err;
        res.send(data);
    })
});

// Request URL: http://localhost:3000/products/611f6d13585aa41144afc7b4
router.get('/:id', function (req, res, next) {
    Product.findById(req.params.id, (err, data) => {
        if (err) throw err;
        res.send(data);
    })
});

// Request URL: http://localhost:3000/products
// Header: Content/Type: application/json
// Request Body: { "name": "Product One", "price": 12000, "quantity": 5, "image": "https://d3nn873nee648n.cloudfront.net/900x600/14762/8-SM556400.jpg" }
router.post('/', function (req, res, next) {
    Product.create(req.body, (err, data) => {
        if (err) throw err;
        res.send(data);
    })
});

module.exports = router;
