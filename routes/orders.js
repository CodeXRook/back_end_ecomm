const express = require('express');
const OrdersRouter = express.Router();
const OrdersService = require('../service/orders');

//POST -- CREATE
OrdersRouter.post('/',(req, res, next) => {
   const {id, user_id, order_total, order_status} = res.body;

   OrdersRouter.Services.create(id, user_id, order_total, order_status)
   .then(data =>{
       res.json({success: `Created Orders user_id ${user_id} with generated ID: ${data.id}`});
   })
   .catch(err => {
       next(err);
   })
});

//GET -- READ
ordersRouter.get('/:id/', (req, res, next) =>{
    const {id} = req.param;

    OrdersService.read(id)
    .then(data => {
        res.json(data);
    })
});

//PUT -- UPDATE
ordersRouter.put('/:id', (req, res, next) =>{
    const {id, user_id, order_total, order_status} = req.body;
    const {id} = req.params;

    OrdersService.update(id, user_id, order_total, order_status)
    .then(data => {
        res.json({success: `Updated orders id ${id} with user_id I: ${user_id}`});
    })
    .catch(err => {
        next(err);
    })
});

// DELETE -- DELETE
ordersRouter.delete('/:id', (req, res, next) => {
const {id} = req.params;
    OdersService.delete(id)
    .then( data =>{
        res.json({success: `Deleted orders with ID: ${id}`});
    })
    .catch(err => {
        next(err);
    })
});

ordersRouter.get('/:order_status', (req, res, next) => {
const {order_status} = req.params;

    OrdersService.getStatus(order_status)
    .then(data =>{
        res.json(data);
    })
});

module.exports = ordersRouter;