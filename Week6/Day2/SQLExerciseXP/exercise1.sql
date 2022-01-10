-- Exercise 1

-- SELECT * FROM items ORDER BY item_price ASC

-- SELECT * FROM items WHERE item_price >= 80 ORDER BY item_price DESC

-- SELECT firstname, lastname FROM customers	ORDER BY firstname ASC LIMIT 3

-- SELECT lastname FROM customers ORDER BY lastname DESC 

-- CREATE TABLE purchases(
-- customer_id SERIAL REFERENCES customers (customer_id),
-- item_id SERIAL REFERENCES items (item_id)
-- )

-- INSERT INTO purchases (customer_id)
-- VALUES(1)

-- INSERT INTO purchases (customer_id, item_id)
-- VALUES(2,3);

-- INSERT INTO purchases (customer_id, item_id)
-- VALUES(3,1);

-- INSERT INTO purchases (customer_id, item_id)
-- VALUES(4,2);

-- INSERT INTO purchases (customer_id, item_id)
-- VALUES(5,1);

-- SELECT purchases, firstname, lastname
-- FROM purchases
-- INNER JOIN customers
-- ON purchases.customer_id = customers.customer_id

-- SELECT purchases, firstname, lastname
-- FROM purchases
-- INNER JOIN customers
-- ON purchases.customer_id = customers.customer_id
-- WHERE customers.customer_id = 4

-- SELECT purchases, item_name
-- FROM purchases
-- INNER JOIN items
-- ON purchases.item_id = items.item_id
-- WHERE items.item_id = 1 OR items.item_id = 2

-- INSERT INTO items(item_name, item_price)
-- VALUES('hard drive', 50)

-- INSERT INTO purchases(item_id)
-- VALUES(4)


-- SELECT firstname, lastname, item_name
-- FROM customers, items
-- INNER JOIN purchases
-- ON items.item_id = purchases.item_id


