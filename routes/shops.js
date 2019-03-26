const express = require('express');
const shopsRouter =express.Router();
const ShopsService = require('../services/shops');

//POST -- CREATE
shopsRouter.post('/', (req, rew, next) => {
    const {user_id, shopname, category, address, state, city, zipcode};

    ShopsService.create(user_id, shopname, category, address, state, city, zipcode)
    .then(data => {
        res.json({success: `Created shopename ${shopname} with generated ID: ${data.id}`});
    })
    .catch(err => {
        next(err);
    })
});

// GET - READ 
shopsRouter.get('/:shopname', (req, res, next) => {
 const {shopname} = req.params;

  ShopsServive.read(shopname)
  .then(data => {
      res.json(data);
  })
});

// PUT -- UPDATE
ordersRouter.put('/:shopname', (req, res, next) =>{
    
})