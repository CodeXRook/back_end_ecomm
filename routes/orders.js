const express = require('express');
const OrdersRouter = express.Router();
const OrdersService = require('../service/orders');

//POST- CREATE
OrdersRouter.post('/',(req, res, next) => {
   const {id, user_id, order_total, order_status} = res.body;
})