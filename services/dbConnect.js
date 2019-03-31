const pgp =require('pg-promise')({});
const db = pgp('process.env.DATABASE_URL || postgres://localhost/jampack');
//HEROKU DATABASS OF YOUR OWN DATA BASE ("||") MEANS OR...
module.exports ={
    db,
}