const express = require('express');
const userRouter = express.Router();
const userService = require('../service/user');

// POST - CREATE
userRouter.post('/',(req, res, next) =>{
    const {id, firstname, lastname, address, state, zipcode} = req.body;

    userService.create(id, firstname, lastname, address, state, zipcode)
    .then(data => {
        res.json({success: `User created ${firstname} ${lastname} ${address} ${state} ${zipcode}`});
    })
    .catch(err => {
        next(err);
    })
});

// GET - READ
userRouter.get('/:firstname', (req, res, next) =>{
        const {firstname} = req.params;


    })


