const express = require('express');
const shopsRouter =express.Router();
const ShopsService = require('../services/shops');

//POST -- CREATE
shopsRouter.post('/', (req, rew, next) => {
    const {user_id, shopname, category, address, state, city, zipcode};

    ShopsService.create(user_id, shopname, category, address, state, city, zipcode)
    .then(data => {
        
    })
})