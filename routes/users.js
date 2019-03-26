const express = require('express');
const usersRouter = express.Router();
const usersService = require('../services/users');

// POST - CREATE
usersRouter.post('/',(req, res, next) =>{
    const {id, firstname, lastname, address, state, zipcode} = req.body;

    usersService.create(id, firstname, lastname, address, state, zipcode)
    .then(data => {
        res.json({success: `User created ${firstname} ${lastname} ${address} ${state} ${zipcode}`});
    })
    .catch(err => {
        next(err);
    })
});

// GET - READ
usersRouter.get('/:firstname', (req, res, next) =>{
        const {firstname} = req.params;

            usersService.read(firstname)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                next(err);
            })
    });

    // PUT -- UPDATE
usersRouter.put('/:firstname',(req, res, next) => {
    const {address} = req.body;
    const {firstname} = req.params;

    usersService.update(firstname, lastname, address)
    .then(data => {
        res.json({success: `Updated user firstname and address ${firstname} ${address}`});
    })
    .catch(err => {
        next(err);
    })
})

// DELETE- DELETE
usersRouter.delete('/:id', (req, res, next) => {
    const {firstname} = req.params;

    usesrRouter.delete(firstname)
    .then(data => {
        res.json({success: `Deleted trainer name ${firstname}`});
    })
    .catch(err => {
        next(err);
    })
});

usersRouter.get('/:firstname', (req, res, next) => {
    const {firstname} = req.params;
  
    
})

module.exports = usersRouter;
