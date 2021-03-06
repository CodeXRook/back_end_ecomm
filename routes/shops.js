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
    const {user_id, shopname, category, address, state, city, zipcode} = req.body;
    const {shopname} = req.params;

    OrdersService.updated(user_id, shopname, category, address, state, city, zipcode)
    .then(data =>{
        res.json({success: `Updated shopsname ${shopsname} with user_id ID: ${user_id}`});
    })
});

//DELETE -- DELETE
ordersRouter.delete('/:user_id',(req, res, next) => {
 const {user_id} = req.params;

  ShopsService.delete(user_id)
  .then(data => {
     res.json({success: `Deleted user_id with ID: ${user_id}`});
  })
  .catch(err => {
      next(err);
  })
});

shopsRouter.get('/:type/category', (req, res, next) => {
    const {type} =req.params;

    SHopsService.getCategoryOfType(type)
    .then(data => {
        re.json(data);
    })
    .catch(err => {
        next(err);
    })
});

module.exports = shopsRouter;