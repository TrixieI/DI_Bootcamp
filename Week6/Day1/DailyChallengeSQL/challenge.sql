-- SELECT * FROM cityinfo

-- SELECT temperature FROM cityinfo WHERE city LIKE 'Boston' AND event_datetime = '03-01-2015'

-- SELECT EXTRACT(DAY FROM event_datetime), EXTRACT(HOUR FROM event_datetime) FROM cityinfo WHERE city='San Francisco' AND temperature > 28 AND temperature < 30

-- SELECT city, event_datetime, sound FROM cityinfo ORDER BY sound DESC LIMIT 1;

-- SELECT city, event_datetime, sound FROM cityinfo ORDER BY sound ASC LIMIT 1;

-- SELECT dust FROM cityinfo WHERE city = 'San Francisco' AND EXTRACT(HOUR FROM event_datetime) > 20;

-- SELECT event_datetime FROM cityinfo WHERE city = 'Geneva' AND (humidity < 40 OR humidity > 60);

-- SELECT EXTRACT(DOW FROM event_datetime) AS Dayofweek,  city FROM cityinfo ORDER BY light DESC LIMIT 1;

-- SELECT DISTINCT city FROM cityinfo WHERE city ILIKE 's%'

-- INSERT INTO cityinfo(event_datetime,city,temperature,light,airquality_raw,sound,humidity,dust)
-- VALUES(NOW(), 'Tel-aviv', 30, 4 ,7 ,8,3,5) RETURNING *;