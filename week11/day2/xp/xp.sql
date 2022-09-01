/*Exercise 1: DVD Rental
Instructions
1.Get a list of all film languages.
SELECT * FROM public.language

2.Get a list of all films joined with their languages – select the following details :
film title, description, and language name. Try your query with different joins:
Get all films, even if they don’t have languages.
Get all languages, even if there are no films in those languages.

SELECT language.name, film.title
FROM film
FULL OUTER JOIN language
ON language.language_id = film.language_id;

3.Create a new table called new_film with the following columns : id, name. Add some new films to the table.

 CREATE TABLE new_film (
 	new_film_id serial PRIMARY KEY,
	new_film_name VARCHAR(50)
 );
  
  INSERT INTO new_film(new_film_name)
  VALUES ('Bella Chao'),
  ('New Year'),
  ('Harry Potter'),
  ('King');
  
 4.Create a new table called customer_review, which will contain film reviews that customers will make.
   
 CREATE TABLE customer_review(
    review_id serial PRIMARY KEY NOT NULL,
    film_id INTEGER,
    FOREIGN KEY (film_id) REFERENCES new_film(new_film_id) ON DELETE CASCADE,
    language_id INTEGER,
    FOREIGN KEY (language_id) REFERENCES language(language_id) ON DELETE CASCADE,
    title VARCHAR(50),
    score INT NOT NULL
    CHECK (score BETWEEN 1 AND 10),
    review_text VARCHAR,
    last_update  DATE NOT NULL
 );
 
 5. Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
 	  INSERT INTO customer_review(film_id, language_id, title, score, review_text, last_update) 
	  values    	((select new_film_id from new_film where new_film_name='Bella Chao'),
     (select language_id from language where language_id = (select language_id from film where title='Bella Chao')),
     'title',
     7,
     'comment',
     '00-00-0000'),

     ((select new_film_id from new_film where new_film_name='Airport Pollock'),
     (select language_id from language where language_id = (select language_id from film where title='Airport Pollock')),
     'title',
     7,
     'comment',
     '00-00-0000');
	 
6.Delete a film that has a review from the new_film table, what happens to the customer_review table?

 DELETE FROM new_film where new_film_name = 'Bella chao';
 
 🌟 Exercise 2 : DVD Rental
Instructions
1.Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE film
SET language_id = (select language_id from language where name = 'English')
WHERE film.title IN('Chamber Italian', 'Bright Encounters', 'Grosse Wonderful');

2.Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?

3.We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
DROP TABLE customer_review;

4.Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT COUNT(rental_id) from rental WHERE rental.return_date IS NULL;

5.Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
   SELECT f.title, p.amount, r.return_date
FROM film f

INNER JOIN inventory i 
ON f.film_id = i.film_id

INNER JOIN rental r
ON i.inventory_id = r.inventory_id

INNER JOIN payment p
ON r.rental_id = p.rental_id 

WHERE r.return_date IS NULL

ORDER BY p.amount DESC

LIMIT 30;

6.Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
 */
SELECT distinct(f.title)
FROM film f

INNER JOIN film_actor fa
ON f.film_id = fa.film_id
INNER JOIN actor a
ON fa.actor_id = a.actor_id

INNER JOIN film_category fc
ON fc.film_id = f.film_id
INNER JOIN category c
ON c.category_id = fc.category_id

 
INNER JOIN inventory i
ON i.film_id = f.film_id
INNER JOIN rental r
ON i.inventory_id = r.inventory_id
INNER JOIN payment p
ON r.rental_id = p.rental_id
INNER JOIN customer cu
ON p.customer_id = cu.customer_id



WHERE (f.description LIKE '%Sumo Wrestler%' AND a.first_name = 'Penelope' AND a.last_name = 'Monroe')

OR (c.name = 'Documentary' AND f.length < 60 AND f.rating = 'R')   

   
   
   
   
