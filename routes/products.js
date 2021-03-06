const express = require('express');
const productsRouter = express.Router();
const ProductsRouter = require('../services/products');

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
    .catch(err => {
        next(err);
    })
});

// PUT - UPDATE
productsRouter.put('/:id', (req, res, next)=> {
    const {id, name, shop_id, price, description, category, url} = req.body;
    const {id} = req.params;

    ProductsService.update(id, name, shop_id, price, description, category, url)
    .then(data =>{
        res.json({success: `Updated product name ${name} with product ID: ${trainer}`});
    })
    .catch(err => {
        next(err);
    })
});

//DELETE - DELETE
productsRouter.delete('/:id', (req, res, next) => {
    const {id} = req.params;

    ProductsService.delete(id)
    .then(data => {
        res.json({ success: `Deleted product with ID: ${id}`});
    })
    .catch(err =>{
        next(err);
    })
});

productsRouter.get('/:type/all', (req, res, next) =>{
    const {type} = req.params;

    ProductsService.getAllProductsOfType(type)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        next(err);
    })
});

module.exports = productsRouter;