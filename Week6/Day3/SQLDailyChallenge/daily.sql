-- CREATE TABLE customer (
-- customer_id SERIAL PRIMARY KEY NOT NULL,
-- name VARCHAR(20) NOT NULL
-- )

-- CREATE TABLE customer_profile (
--   online BOOLEAN NOT NULL,
--   profile_id INTEGER UNIQUE REFERENCES customer (customer_id) NOT NULL
-- );

-- INSERT INTO customer(name)
-- VALUES('Drake')

-- INSERT INTO customer_profile(online, profile_id)
-- VALUES(false, 3)

-- SELECT *
-- FROM customer
-- INNER JOIN customer_profile 
-- ON customer.customer_id = customer_profile.profile_id

-- SELECT *
-- FROM customer
-- RIGHT JOIN customer_profile 
-- ON customer.customer_id = customer_profile.profile_id

-- SELECT *
-- FROM customer
-- LEFT JOIN customer_profile 
-- ON customer.customer_id = customer_profile.profile_id

-- SELECT *
-- FROM customer
-- FULL JOIN customer_profile 
-- ON customer.customer_id = customer_profile.profile_id

-- CREATE TABLE product(
-- product_id SERIAL PRIMARY KEY NOT NULL,
-- name VARCHAR(20) NOT NULL,
-- price SMALLINT NOT NULL
-- )

-- CREATE TABLE shipment(
-- shipment_id SERIAL PRIMARY KEY NOT NULL,
-- shipment_sent BOOLEAN NOT NULL
-- )

-- CREATE TABLE purchase(
-- product_id INTEGER NOT NULL REFERENCES product(product_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- shipment_id INTEGER NOT NULL REFERENCES shipment(shipment_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- PRIMARY KEY (product_id, shipment_id)
-- )

-- INSERT INTO product(name, price)
-- VALUES('hat', 25)

-- INSERT INTO shipment(shipment_sent)
-- VALUES(false)

-- INSERT INTO purchase(product_id, shipment_id)
-- VALUES((SELECT product_id FROM product WHERE name = 'hat'),
-- 	  (SELECT shipment_id FROM shipment WHERE shipment_sent = true))

-- INSERT INTO purchase(product_id, shipment_id)
-- VALUES((SELECT product_id FROM product WHERE name = 'socks'),
-- 	  (SELECT shipment_id FROM shipment WHERE shipment_sent = false))
	  
-- 	  INSERT INTO purchase(product_id, shipment_id)
-- VALUES((SELECT product_id FROM product WHERE name = 'Shampoo'),
-- 	  (SELECT shipment_id FROM shipment WHERE shipment_sent = true))

-- SELECT * 
-- FROM purchase
-- INNER JOIN product ON product.product_id = purchase.product_id
-- INNER JOIN shipment ON shipment.shipment_id = purchase.shipment_id

-- SELECT name
-- FROM purchase
-- RIGHT JOIN product ON product.product_id = purchase.product_id
-- RIGHT JOIN shipment ON shipment.shipment_id = purchase.shipment_id


