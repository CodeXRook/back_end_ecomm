const pgp =require('pg-promise')({});
const db = pgp('postgres://localhost/jampack');

module.exports ={
    db,
}