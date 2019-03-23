const express = require('express');
const app = express();

//FORWARD SLASH PING OR ANY TYPE TO ACCESS EXACT LOCAL HOST FILE
app.get('/ping',(req, res) => {
    res.status(200);
    res.json({'Text Work': true});
});

const port = 5050
app.listen(port,() =>{
    console.log(`Listening on port ${port}`);
})