const {db} = require ('./dbConnect');
const UserService ={};

UserService.create = (firstname, lastname, address, state, zipcode) =>{
    const sql = `INSERT INTO user (firstname, lastname, address, state, zipcode) VALUES ($[firstname], $[lastname], $[address], $[state], $[zipcode]) RETURNING id`;
    return db.one(sql, {firstname, lastname, address, state, zipcode});
}

UserService.read =(firstname) => {
    const sql =`
    SELECT 
    user.*,
      .name AS 
    FROM 
    JOIN 
      ON user.id_id=id.id
    WHERE 
      user.id = $[id.id]
    `;
    return db.one(sql, {id});
}

UserService.update = (firstname, lastname, address, state, zipcode) =>{
    const sql = `
    UPDATE user
    SET
     user_id= $[user_id]
     WHERE
     id=$[id]
     `;
     return db.none(sql, {firstname, lastname, address, state, zipcode});
}

UserService.getALLUser = (id) =>{
    const sql =`
    SELECT
    u.*
    p.name AS user_id
    FROM products u
    JOIN `
    
}