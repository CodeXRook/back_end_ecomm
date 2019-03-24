DROP DATABASE IF EXISTS jampack;
CREATE DATABASE jampack;

\c jampack;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR NOT NULL,
    lastname VARCHAR NOT NULL,
    address VARCHAR NOT NULL,
    state VARCHAR NOT NULL,
    zipcode VARCHAR NOT NULL
);

CREATE TABLE shops (
id SERIAL PRIMARY KEY, 
shopname VARCHAR NOT NULL,
user_id INT REFERENCES users(id) NOT NULL,
product_id INT REFERENCES products(id) NOT NULL,
state VARCHAR NOT NULL,
city VARCHAR NOT NULL,
zipcode VARCHAR NOT NULL
);

CREATE TABLE products (
id SERIAL PRIMARY KEY,
shop_id INT REFERENCES shops(id) NOT NULL,
name VARCHAR NOT NULL,
price MONEY,
description VARCHAR NOT NULL,
category VARCHAR NOT NULL,
url VARCHAR NOT NULL
);

CREATE TABLE orders (
id SERIAL PRIMARY KEY,
user_id INT REFERENCES users(id) NOT NULL,
order_total VARCHAR NOT NULL,
order_status VARCHAR NOT NULL
);

INSERT INTO users (firstname, lastname, address, state, zipcode) VALUES
('Ash', 'Gary', '146 west st', 'New york', 10472),
('Pat', 'Ewin', '55 bowery st', 'New york', 10162),
('Mark', 'James', '123 main st', 'Main', 10563);

INSERT INTO shops (shopname, products, address, state, zipcode) VALUES
('JeanSpace, Jeans, 34 howard st, New york, 10101')