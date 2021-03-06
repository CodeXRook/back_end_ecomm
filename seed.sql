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
category VARCHAR NOT NULL,
 address VARCHAR NOT NULL,
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

CREATE TABLE home (
    id SERIAL PRIMARY KEY,
    light VARCHAR NOT NULL,
    hair VARCHAR NOT NULL
);

INSERT INTO users (firstname, lastname, address, state, zipcode) VALUES
('Ash', 'Gary', '146 west st', 'New york', '10472'),
('Pat', 'Ewin', '55 bowery st', 'New york', '10162'),
('Mark', 'James', '123 main st', 'Main', '10563');

INSERT INTO shops (user_id, shopname, category, address, state, city, zipcode) VALUES
(1,'JeanSpace', 'Clothing', '34 howard st', 'New york', 'Queens', '10101'),
(3,'BoxPlug', 'electronics', '6 main st', 'New york','Bronx', '10101'),
(2,'Jewel Bug', 'jewelry', '216 flabush ave','New york','Manhattan', '10493');

INSERT INTO products (id, name, shop_id, price, description, category, url) VALUES
(50,'rocawear', 1, 65, 'pants', 'Clothing', 'wwww.rocawear.com'),
(23,'jacab&co', 2, 650, 'gold chain', 'Jewelry', 'wwww.jewelbug.com'),
(13,'jacab&co', 3, 1600, 'macbookpro', 'electronics', 'wwww.boxplug.com');

INSERT INTO orders (id, user_id, order_total, order_status) VALUES
(01, 1, 5, 'pending'),
(08, 3, 34, 'delivered'),
(05, 2, 5, 'in tranist');

INSERT INTO home (user_id, light, hair) VALUES
(12, 'red', 'weave');