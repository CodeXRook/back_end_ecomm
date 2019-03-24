const express = require('express');
const productsRouter = express.Router();
const ProductRouter = require('../services/products');

// POST - CREATE
productRouter.post('/', (req, res, next) => {
    const {id, name, shop_id, price, description, category, url} = req.body;

    ProductService.create(id, name, shop_id, price, description, category, url)
    .then(data => {
        res.json({success: `Created Porduct named ${name} with generated ID: ${data.id}`});
    })
})