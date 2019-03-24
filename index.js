const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 5055

const userRouter = require('./routes/user');


//MIDDLEWARE NEEDED
//NEED PARSE 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())

//FORWARD SLASH PING OR ANY TYPE TO ACCESS EXACT LOCAL HOST FILE
app.get('/ping',(req, res) => {
    res.status(200);
    res.json({'Text Work':'🔥🔥🔥'});
});

const port = 5055
app.listen(port,() =>{
    console.log(`Listening on port ${port}`);
})