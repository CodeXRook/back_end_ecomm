const express = require('express');
const OrdersRouter = express.Router();
const OrdersService = require('../service/orders');

//POST- CREATE
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

//GET PAID
ordersRouter.get('/:id/', (req, res. next) =>{
    const {id} = req.param;

    OrdersService.read(id)
    .then(data => {
        res.json(data);
    })
})