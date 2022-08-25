
-- SELECT * FROM users

-- SELECT nextval('users_id_seq')

-- SELECT max (country_id) from country
-- DELETE from city where country_id=100
-- select * from city where country_id = 100
-- insert into city(city, country_id)
-- values ('vaduz', 100)

-- CREATE TABLE test_cons (
-- 	id serial primary key,
-- 	username varchar(255) not null UNIQUE,
-- 	email varchar(255) unique
-- )
-- insert into test_cons (email, username)
-- values ('test@gmail.com', 'test')
--  select * from customer WHERE customer_id in(10,80,90)

-- select first_name, count(1)
-- from costomer
-- group by first_name
-- having count(1)>1

-- select * from basket_a;
-- select * from basket_b;

-- select b, fruit_b
-- from backet_a
-- inner join basket_b, b
-- 		on fruit_a = fruit_b;

-- select a.a, a.fruit_a, b.b, fruit_b
-- from basket_a a, basket_b b, basket_c c
-- where a.fruit_a = b.fruit_b
-- and c.id = a.id

-- select b, fruit_b
-- from backet_a
-- left join basket_b, b
-- 		on fruit_a = fruit_b;
-- where b.fruit_b is null

-- select city 
-- from city c
-- inner join country ON c.country_id= country.country_id
-- WHERE country.country='Israel'


-- SELECT address 
-- FROM address
-- JOIN customer
-- ON customer.address_id = address.address_id
-- where 
-- 	customer.first_name = 'Mary' 
-- 	AND customer.last_name = 'Smith'