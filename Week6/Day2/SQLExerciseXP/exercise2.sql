-- SELECT * FROM customer

-- SELECT first_name || ' ' || last_name AS full_name FROM customer

-- SELECT DISTINCT create_date FROM customer

-- SELECT * FROM customer ORDER BY first_name DESC

-- SELECT
--   film_id,
--   title,
--   description,
--   release_year,
--   rental_rate
-- FROM film
-- ORDER BY rental_rate ASC

-- SELECT address, phone, district
-- FROM address 
-- INNER JOIN customer
-- ON customer.customer_id = address.address_id
-- WHERE district = 'Texas'

-- SELECT * FROM film WHERE film_id IN(15, 150)

-- SELECT film_id, title, description, length, rental_rate FROM film WHERE title = 'Unbreakable'

-- SELECT film_id, title, description, length, rental_rate FROM film WHERE title ILIKE 'Un%'

-- SELECT * FROM film ORDER BY rental_rate ASC LIMIT 10

-- SELECT title
-- FROM film
-- LEFT JOIN inventory
-- ON inventory.inventory_id = film.film_id

-- SELECT city, country
-- FROM country
-- INNER JOIN city
-- ON city.country_id = country.country_id



