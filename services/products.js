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
    *,
    id.name
    FROM orders
    JOIN id
    ON user. =
    WHERE
      order.name =[name]
    `;
    return db.one(sql, {id});
}

ProductsServices.update = (id, name, shop_id, price, description, category, url) =>{
    const sql =`
    UPDATE products
    SET
    id_id=$[id_id],
    name=$[name],
    shop_id=$[shop_id],
    price=$[price],
    description=$[description],
    category=$[category],
    url=$[url]
    WHERE
     id=$[id]
    `;
    return db.none(sql, {id, name, shop_id, price, description, category, url});
}

ProductsServices.delete = (id) => {
    const sql =`
    DELETE FROM products WHERE id=$[id]
    `;
    return db.none(sql, {id});
}

ProductsServices.getALLProductsOfType = (type) => {
    const sql =`
    SELECT
    products.*,
    id.id AS id_id
    FROM products
    JOIN id
    ON products.id_id = id.id
    WHERE
    products.
    `;
    return db.any(sql, {type});
}

module.exports =ProductsService;
