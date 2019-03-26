const {db} = require('./dbConnect');
const OrdersService ={};

OrdersService.create =(id, user_id, order_total, order_status) => {
    const sql = `INSERT INTO orders (id, user_id, order_total, order_status) VALUES ($[id], $[user_id])`;
    return db.one(sql, {id, user_id, order_total, order_status});
}

OrdersService.read = (id) => {
const sql = `
SELECT
orders.*,
id.
FROM orders
JOIN id
ON user. =
WHERE
 
`
}