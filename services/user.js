const {db} = require ('./dbConnect');
const UserService ={};

UserService.create = (id, user_id, order_total, order_status) =>{
    const sql = `INSERT INTO user (id, user_id, order_total, order_status) VALUES ($[id], $[user_id], $[order_total], $[order_status]) RETURNING id`;
    
}