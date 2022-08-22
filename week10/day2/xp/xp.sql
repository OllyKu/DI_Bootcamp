--  Exercise 1 : Items And Customers
-- Create a database called public.
-- Add two tables:
-- items
-- customers.
-- CREATE TABLE items(
-- 	item_id serial PRIMARY KEY,
-- 	item_name varchar(50),
-- 	item_price integer
-- )

-- CREATE TABLE customers (

-- 	customer_id serial PRIMARY KEY,
-- 	first_name varchar(50),
-- 	last_name varchar(50)
-- )

-- Add the following items to the items table:
-- 1 - Small Desk – 100 (ie. price)
-- 2 - Large desk – 300
-- 3 - Fan – 80

-- INSERT INTO items(item_id, item_name, item_price)
-- VALUES (1, 'Small Desk',300);

-- INSERT INTO items(item_id, item_name, item_price)
-- VALUES (2, 'Large desk', 300);

-- INSERT INTO items(item_id, item_name, item_price)
-- VALUES (3, 'Fan', 80);


-- Add 5 new customers to the customers table:
-- 1 - Greg - Jones
-- 2 - Sandra - Jones
-- 3 - Scott - Scott
-- 4 - Trevor - Green
-- 5 - Melanie - Johnson

-- INSERT INTO
-- 	customers(customer_id, first_name, last_name)
-- VALUES
-- 	(1, 'Greg', 'Jones'),
-- 	(2, 'Sandra', 'Jones'),
-- 	(3, 'Scott', 'Scott'),
-- 	(4, 'Trevor', 'Green'),
-- 	(5, 'Melanie', 'Johnson')

-- Use SQL to fetch the following data from the database:
-- All the items.
-- All the items with a price above 80 (80 not included).
-- All the items with a price below 300. (300 included)
-- All customers whose last name is ‘Smith’ (What will be your outcome?).Successfully run. Total query runtime: 9 secs 975 msec.
-- rows affected.
-- All customers whose last name is ‘Jones’.
-- All customers whose firstname is not ‘Scott’.

-- SELECT item_id, item_name, item_price FROM items
-- SELECT item_name FROM items WHERE item_price > 80
-- SELECT item_name FROM items WHERE item_price < 300
-- SELECT last_name From customers WHERE last_name = 'Smith'
-- SELECT last_name From customers WHERE last_name = 'Jones'
SELECT last_name From customers WHERE last_name != 'Scott'