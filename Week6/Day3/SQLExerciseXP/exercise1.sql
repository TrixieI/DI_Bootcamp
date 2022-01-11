-- Exercise 1

-- SELECT * 
-- FROM language
-- INNER JOIN film
-- ON film.language_id = language.language_id

-- SELECT title, description, language.name
-- FROM film
-- INNER JOIN language
-- ON film.language_id = language.language_id

-- SELECT title, description, language.name
-- FROM film
-- LEFT JOIN language
-- ON film.language_id = language.language_id

-- SELECT title, description, language.name
-- FROM film
-- RIGHT JOIN language
-- ON film.language_id = language.language_id

-- CREATE TABLE new_film(
-- film_id SERIAL PRIMARY KEY NOT NULL,
-- film_name VARCHAR(30)
-- )

-- INSERT INTO new_film(film_name)
-- VALUES('Unbreakable')

-- CREATE TABLE customer_review(
-- review_id SERIAL PRIMARY KEY NOT NULL,
-- film_id INTEGER REFERENCES new_film (film_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- language_id INTEGER REFERENCES language (language_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- title VARCHAR(20) NOT NULL,
-- score SMALLINT,
-- review_text TEXT,
-- last_update DATE
-- )

-- INSERT INTO customer_review(film_id, language_id, title, score, review_text, last_update)
-- VALUES((SELECT film_id FROM new_film WHERE film_id = 1), 
-- 	  (SELECT language_id FROM language WHERE name = 'English'),
-- 	  'Amazing!', 10, 'One of the best movies I ever watched!', '01/01/2022')

-- INSERT INTO customer_review(film_id, language_id, title, score, review_text, last_update)
-- VALUES((SELECT film_id FROM new_film WHERE film_name = 'Demon Slayer'), 
-- 	  (SELECT language_id FROM language WHERE name = 'English'),
-- 	  'Great time!', 8, 'Excellent movie that lived up to the hype!', '11/02/2022')
	  
-- DELETE FROM new_film WHERE film_id = 2

-- The customer review also gets deleted because we put ON DELETE CASCADE!



	  
