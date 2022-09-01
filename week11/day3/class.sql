--create table from query
-- create table customer_copy
-- as select * from customer;


-- create TABLE customeraddress
--  as select first_name || ' ' || last_name as full_name,
-- 	address,
-- 	city,
-- 	country
-- FROM customer, address
-- where customer.address_id = address.address_id
-- and address.city_id = city.city_id
-- and city.country_id = city.country_id

 -- create function
 
 /* CREATE FUNCTION name_func
 	return return_type
	LANGUAGE plpgsql
as
$$
DECLARE
-- variable declaration
BEGIN
--logic
END;
$$
*/

/*create function get_film_count(len_from int, len_to int)
	returns int
	language plpgsql
 as
 $$
 declare
 	-- variable declarition
	film_count integer;
 begin
 	-- logic
	select count(1) into film_count
	from film
	where length between len_from and len_to;
	
	return film_count;
 end;
 $$
 
 select get_film_count(90,120);*/
 
 
/* CREATE FUNCTION get_film_start(
 	 OUT min_len int,
	 out max_len int,
	 out avg_len int
 )
 LANGUAGE plpgsql
 as
 $$
 begin
 	SELECT MIN(length), MAX(length), AVG(length)
	into min_len, max_len, avg_len
	from film;
end;
$$

SELECT * from get_film_start();*/

/*create function get_film_stat_inout_abc (
	inout min_len int,
	inout max_len int,
	inout avg_len int
)
language plpgsql
as
$$
begin
	select min(length),
			max(length),
			avg(length)
	into min_len,max_len, avg_len
	from film where film_id in (min_len,max_len,avg_len);
end;
$$

select * from get_film_stat_inout_abc(5, 10, 11) */
