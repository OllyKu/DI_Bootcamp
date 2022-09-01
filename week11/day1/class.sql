
-- creating a identity colunm, you can overwrite a system values, wit serial you can't
-- create table color(
-- 	color_id int GENERATED ALWAYS AS identity,
-- 	color_name VARCHAR(255)
-- );

-- INSERT INTO color(color_name)
-- VALUES('Red');
-- SELECT * FROM public.color;

--exercise DELETE
--   CREATE TABLE customers (
--    	 customer_id int GENERATED ALWAYS AS identity,
-- 	 customer_name VARCHAR(255) not null,
-- 	 PRIMARY KEY (customer_id)
--   );
-- constrain key
-- CREATE TABLE contacts(
-- 	contact_id int GENERATED ALWAYS AS identity,
-- 	customer_id int,
-- 	contact_name VARCHAR(255) not null,
-- 	email VARCHAR(255),
-- 	PRIMARY key (contact_id),
-- 	CONSTRAINT fk_customer_id
-- 		FOREIGN key (customer_id)
-- 			references customers(customer_id)
-- );

INSERT INTO contacts(customer_id,contact_name,email)
VALUES (1, 'Jojo', 'Jojo@gmail.com'),
 (1, 'Mojo', 'Mojo@gmail.com'),
 (2, 'MOMO', 'Momo@gmail.com')


