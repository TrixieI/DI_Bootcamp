-- manager_id, manager_name, manager_type (ie.nice, angry, funny ect...):

-- CREATE TABLE boss(
-- boss_id SERIAL PRIMARY KEY,
-- boss_name VARCHAR(30),
-- boss_type VARCHAR(20),
-- owner_id INTEGER UNIQUE REFERENCES department (deptcode)
-- )

-- INSERT INTO boss(boss_name, boss_type, owner_id)
-- VALUES('Frank', 'young', 50)

SELECT boss_name, boss_type, deptcode, location
FROM department
INNER JOIN boss
ON owner_id = deptcode
WHERE deptname = 'FINANCE'

