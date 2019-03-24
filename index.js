const express = require('express');
const app = express();

//FORWARD SLASH PING OR ANY TYPE TO ACCESS EXACT LOCAL HOST FILE
app.get('/ping',(req, res) => {
    res.status(200);
    res.json({'Text Work':'🔥🔥🔥'});
});

const port = 5051
app.listen(port,() =>{
    console.log(`Listening on port ${port}`);
})