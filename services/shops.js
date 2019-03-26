const {db} = require('./dbConnect');
const SHopsService ={};

ShopsService.create =(user_id, shopname, category, address, state, city, zipcode) => {
    const sql = `INSERT INTO orders (user_id, shopname, category, address, state, city, zipcode) VALUES ($[id], $[user_id])`;
    return db.one(sql, {user_id, shopname, category, address, state, city, zipcode});
}

ShopsService.read = (id) => {
const sql = `
SELECT
*
id
FROM orders
WHERE
  order.name =[name]
`;
return db.one(sql, {id});
}

ShopsService.update =( category) => {
    const sql = `
    UPDATE  category
    SET 
    category= $[ category]
    WHERE
    category= $[category]
    `;
    return db.none(sql, {category});
}

ShopsService.delete = (category) => {
    const sql =`
    DELETE FROM shops WHERE  category=$[category]
    `;
    return db.none( sql, {});
}

OrdersService.getAllOrders = () => {
  const sql = `
  SELECT
  *
  FROM orders;
`;
return db.any(sql, {});
}

OrdersSevice.getStatus = () => {
    const sql =`
    SELECT
    orders_status 
    FROM orders 
    WHERE
    user_id =$[user_id];
    `;
    return db.any(sql, {});
}

module.exports =OrdersServices;