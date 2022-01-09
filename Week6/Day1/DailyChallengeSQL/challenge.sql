-- CREATE TABLE actors(
--  actor_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  age DATE NOT NULL,
--  number_oscars SMALLINT NOT NULL
-- )

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES
-- ('Matt','Damon','08/10/1977', 5),
-- ('George','Clooney','08/10/1977', 2),
-- ('Jessica','Loren','08/10/1977', 5),
-- ('Linsey','Lohen','08/10/1977', 2),
-- ('Frank','Bohe','08/10/1977', 1),
-- ('Jonathan','Croney','08/10/1977', 0),
-- ('William','Smith','08/10/1977', 3),

-- I have 7 actors in total

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Luke')

-- ERROR:  INSERT has more target columns than expressions
-- LINE 21: INSERT INTO actors (first_name, last_name, age, number_oscar...
--                                          ^
-- SQL state: 42601
-- Character: 613

-- We cannot leave blank fields because we set the constraints to NOT NULL, meaning we can't have blank fields