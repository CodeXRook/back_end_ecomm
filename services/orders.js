const {db} = require('./dbConnect');
const OrdersService ={};

OrdersService.create =(id, user_id, order_total, order_status) => {
    const sql = `INSERT INTO orders (id, user_id, order_total, order_status) VALUES ($[id], $[user_id])`
}