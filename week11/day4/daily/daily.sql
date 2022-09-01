/* Create a table called product_orders and a table called items.
You decide which fields should be in each table, although make sure the items table has a column called price.

There should be a one to many relationship between the product_orders table and the items table. 
An order can have many items, but an item can belong to only one order.

Create a function that returns the total price for a given order.*/
-- CREATE TABLE product_orders (

-- 	order_id serial PRIMARY KEY,
-- 	customer_name VARCHAR(10)
-- );


-- CREATE TABLE items (

--   item_id serial PRIMARY KEY,
-- 	item_price INTEGER,
-- 	item_desc VARCHAR(10),
--   order_id INTEGER,
-- 	FOREIGN KEY (order_id) REFERENCES product_orders (order_id)
-- )

-- insert into product_orders(customer_name) values
--   ('olga'),
--   ('olga2'),    
--   ('olga3');


-- insert into items(item_price, item_desc, order_id) values
--   (200, 'fan', (select order_id from product_orders where customer_name = 'olga')),
--   (100, 'table', (select order_id from product_orders where customer_name = 'olga')),    
--   (300, 'chair', (select order_id from product_orders where customer_name = 'olga')),
--   (200, 'table2', (select order_id from product_orders where customer_name = 'olga2')),
--   (100, 'fan2', (select order_id from product_orders where customer_name = 'olga2')),    
--   (300, 'chair2', (select order_id from product_orders where customer_name = 'olga2')),
--   (200, 'fan2', (select order_id from product_orders where customer_name = 'olga3')),
--   (100, 'table3', (select order_id from product_orders where customer_name ='olga3')),    
--   (300, 'fan3', (select order_id from product_orders where customer_name ='olga3'));


-- CREATE  FUNCTION total_price(order_num integer) 
-- RETURNS int
-- LANGUAGE plpgsql
-- AS
-- $$
-- BEGIN
--    RETURN(SELECT SUM(item_price) FROM items WHERE items.order_id = order_num);
-- END;
-- $$ 
SELECT * FROM total_price(1);





