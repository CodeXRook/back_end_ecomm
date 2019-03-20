DROP DATABASE IF EXISTS jampack;
CREATE DATABASE jampack;

\c jampack;

CREATE TABLE users (
 id SERIAL PRIMARY KEY,
 firstname VARCHAR NOT NULL,
 lastname VARCHAR NOT NULL,
 address VARCHAR NOT NULL,
 state VARCHAR NOT NULL,
 zipcode VARCHAR NOT NULL,
);

CREATE TABLE marketplace(
id SERIAL PRIMARY KEY, 
shopname VARCHAR NOT NULL,
user_id SERIAL PRIMARY KEY,
state VARCHAR NOT NULL,
city VARCHAR NOT NULL,
zipcode VARCHAR NOT NULL,
);

CREATE TABLE products(
id SERIAL PRIMARY KEY,
name VARCHAR NOT NULL,
price MONEY,
description VARCHAR NOT NULL,
category VARCHAR NOT NULL,
url VARCHAR NOT NULL,
);