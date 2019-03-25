const {db} = require('./dbConnect');
const ProductsServices = {};

ProductsServices.create = (id, name, shop_id, price, description, category, url) =>{
    const sql =`
    INSERT INTO products (id, name, shop_id, price, description, category, url) VALUES
    ($[id], $[name], $[shop_id], $[price], $[description], $[category], $[url]) RETURNING id;`;
    return db.one(sql, {id, name, shop_id, price, description, category, url});
}

ProductsServices.read = (id) => {
    const sql =`
    SELECT
    products.*
    id.name AS id_name
    FROM products
    JOIN id
    ON products.id_id = id.id
    WHERE
    products.id =$[id]
    `;
    return db.one(sql, {id});
}

ProductsServices.update = (id, name, shop_id, price, description, category, url) =>{
    const sql =`
    UPDATE products
    SET
    id_id=$[id_id],
    name=$[name],
    level=$[level],
    `
}