const express = require('express');
const productsRouter = express.Router();
const productRouter = require('../services/products');

// POST - CREATE
productRouter.post('/', (req, res, next) => {
    const {id, name, shop_id, price, description, category, url} = req.body;

})