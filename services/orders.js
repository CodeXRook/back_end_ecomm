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
  order.name =[name]
`;
return db.one(sql, {id});
}

OrdersService.update =( id, order_total, order_status) => {
    const sql = `
    UPDATE orders
    SET 
    order_total_id= $[order_total]
    order_status_id= $[order_status]
    WHERE
    id= $[id]
    `;
    return db.none(sql, {id, order_total, order_status});
}

OrdersService.delete = (order_total) => {
    const sql =`
    DELETE FROM orders WHERE order_total=$[order_total]
    `;
    retrun db.none( sql, {order_total});
}

OrdersService.getAllOrders = {idl => {
  const sql = `
  SELECT
  o.*,
  
`
}