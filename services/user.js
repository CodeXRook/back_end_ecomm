const {db} = require ('./dbConnect');
const UserService ={};

UserService.create = (firstname, lastname, address, state, zipcode) =>{
    const sql = `INSERT INTO user (firstname, lastname, address, state, zipcode) VALUES ($[firstname], $[lastname], $[address], $[state], $[zipcode]) RETURNING id`;
    return db.one(sql, {firstname, lastname, address, state, zipcode});
}

UserService.read =(firstname) => {
    const sql =`
    SELECT 
    *
    FROM users
    WHERE 
      firstname= $[firstname]
    `;
    return db.one(sql, {firstname});
}

UserService.update = (firstname) =>{
    const sql = `
    UPDATE user
    SET
     user_id= $[user_id]
     WHERE
     id=$[id]
     `;
     return db.none(sql, {firstname, lastname, address, state, zipcode});
}

UserService.delete = (firstname) => {
    const sql = `
    DELETE FROM user WHERE firstname=$[firstname]
    `;
    return db.none(sql, {firstname});
  }
  

UserService.getALLUser = (firstname) =>{
    const sql =`
    SELECT
    u.*
    p.name AS user_id
    FROM products u
    JOIN 
    ON
    WHERE
    `;
    return db.any(sql, {name});
}

UserService.getAddressUser = (firstname, address) => {
    const sql = `
    SELECT
       u.*,
       f.name AS firstname_name
    JOIN user u
     ON f.id = u.firstname_id
     WHERE
     f.name =$[name] AND u.address >= $[address]
     `;
     return db.any(sql, {firstname, address});
}

module.exports = UserService;