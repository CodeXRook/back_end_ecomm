const {db} = require ('./dbConnect');
const UserService ={};

UserService.create = (id, user_id, order_total, order_status) =>{
    const sql = `INSERT INTO user (id, user_id, order_total, order_status) VALUES ($[id], $[user_id], $[order_total], $[order_status]) RETURNING id`;
    return db.one(sql, {id, user_id, order_total, order_status});
}

UserService.read =(id) => {
    const sql =`
    SELECT 
    user.*,
      id.id AS id_id
    FROM user
    JOIN id
      ON user.id_id=id.id
    WHERE 
      user.id = $[id.id]
    `;
}