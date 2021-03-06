const bodyParser = require('body-parser'); //MIDDLEWARE
const express = require('express');
const app = express();

const userRouter = require('./routes/users');


//MIDDLEWARE NEEDED
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())


//ROUTES
app.use('/user', userRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/shops', shopsRouter);
app.use('/home',homeRouter);

app.use(( err, req, res, next) => {
    res.status(400).json({error: err.toString()});
});



//FORWARD SLASH PING OR ANY TYPE TO ACCESS EXACT LOCAL HOST FILE
app.get('/',(req, res) => {
    res.status(200);
    res.json({'Text Work':'🔥🔥🔥'});
});

const port = 5055
app.listen(port,() =>{
    console.log(`Listening on port ${port}`);
})