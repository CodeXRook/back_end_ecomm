const express = require('express');
const userRouter = express.Router();
const userService = require('../service/user');

// POST - CREATE
userRouter.post('/',(req, res, next) =>{
    const {id, firstname, lastname, address, state, zipcode} = req.body;

    userService.create(id, firstname, lastname, address, state, zipcode)
    .then(data => {
        res.json({})
    })
})


