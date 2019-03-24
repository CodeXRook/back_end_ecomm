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

            userService.read(firstname)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                next(err);
            })
    });

    // PUT -- UPDATE
userRouter.put('/:name',(req, res, next) => {
    const {address} = req.body;
    const {name} = req.params;

    userService.update(firstname, lastname, address)
    .then(data => {
        res.json({success: `Updated user firstname and address ${firstname} ${lastname} ${address}`});
    })
    .catch(err => {
        next(err);
    })
})

// DELETE- DELETE
userRouter.delete('/:id', (req, res, next) => {
    const {firstname} = req.params;

    userRouter.delete(name)
    .then(data => {
        res.json({success: `Deleted trainer name ${firstname}`});
    })
    .catch(err => {
        next(err);
    })
});

userRouter.get('/:id/orders', (req, res, next) => {
    const {id} = req.params;
  
    
})

