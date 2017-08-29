DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(15,2) default 0,
  stock_quantity INT(15) default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone 7", "Electronics", 600.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("macbook pro", "Electronics", 2000.00, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone 6", "Electronics", 400.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tv", "Electronics", 500.00, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("speaker", "Electronics", 100.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("usb mouse", "Electronics", 30.00, 98);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("xbox", "Electronics", 200.00, 56);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ps4", "Electronics", 300.00, 150);
