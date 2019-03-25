const {db} = require('./dbConnect');
const ProductsServices = {};

ProductsServices.create = (id, name, shop_id, price, description, category, url) =>{
    const sql =`
    INSERT INTO products (id, name, shop_id, price, description, category, url) VALUES
    ($[id], $[name], $[shop_id], $[price], $[description], $[category], $[url]) RETURNING id;`;
}