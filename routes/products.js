const express = require('express');
const productsRouter = express.Router();
const ProductRouter = require('../services/products');

// POST - CREATE
productsRouter.post('/', (req, res, next) => {
    const {id, name, shop_id, price, description, category, url} = req.body;

    ProductsService.create(id, name, shop_id, price, description, category, url)
    .then(data => {
        res.json({success: `Created Porduct named ${name} with generated ID: ${data.id}`});
    })
    .catch(err => {
        next(err);
    })
})

// GET - READ
productsRouter.get('/:id/', (req, res, next)=> {
    const {id} = req.params;

    ProductsService.read(id)
    .then(data => {
        res.json(data);
    })
})