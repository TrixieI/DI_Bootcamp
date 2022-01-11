-- Exercise 2

-- UPDATE film
-- SET language_id = 2
-- WHERE title = 'Rage Games'

-- UPDATE film
-- SET language_id = 6
-- WHERE title = 'Fever Empire'

-- UPDATE film
-- SET language_id = 4
-- WHERE title = 'Wonka Sea'

-- Customer table has the foreign id for the store id, if we insert a new customer
-- we need to set which store out of the 2 the customer belongs to as both stores have
-- different addresses and managers

-- DROP TABLE customer_review

-- Droping the customer_review table is not an issue as it's a child table that has
-- references to other parent tables, it would be a problem if the customer_review table
-- had it's own child table that referenced it, but since it has none, droping is simple

-- SELECT * FROM rental WHERE return_date IS NULL

-- rental_rate  / inventory has he film_id and rental_rate is inside the film table

-- SELECT * FROM rental

-- SELECT *
-- FROM film
-- INNER JOIN inventory ON inventory.film_id = film.film_id
-- INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
-- WHERE return_date IS NULL
-- ORDER BY rental_rate DESC
-- LIMIT 30

-- SELECT *
-- FROM film
-- INNER JOIN film_actor ON film_actor.film_id = film.film_id
-- INNER JOIN actor ON actor.actor_id = film_actor.actor_id
-- WHERE first_name = 'Penelope' AND last_name = 'Monroe' AND description ~ 'Sumo'

-- SELECT * FROM film
-- WHERE rating = 'R' AND description ~ 'Documentary' AND length < 60

-- customer_id belongs to customer, rental has reference to customer_id

-- SELECT *
-- FROM film
-- INNER JOIN inventory ON inventory.film_id = film.film_id
-- INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
-- INNER JOIN customer ON customer.customer_id = rental.customer_id
-- WHERE first_name = 'Matthew' AND last_name = 'Mahan' AND return_date > '2005-07-28' 
-- AND return_date < '2005-08-01' AND rental_rate > 4
-- We get Sugar Wonka

-- SELECT title, replacement_cost, MAX(replacement_cost)
-- FROM film 
-- INNER JOIN inventory ON inventory.film_id = film.film_id
-- INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
-- INNER JOIN customer ON customer.customer_id = rental.customer_id
-- WHERE first_name = 'Matthew' AND last_name = 'Mahan' AND description ~ 'Boat' 
-- GROUP BY title, replacement_cost
-- ORDER BY replacement_cost DESC
-- LIMIT 1
-- Gives us Stone Fire


