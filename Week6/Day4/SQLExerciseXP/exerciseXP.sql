-- Basic Select Statement

-- SELECT first_name AS FirstName, last_name AS LastName FROM employees

-- SELECT DISTINCT department_id FROM employees

-- SELECT * FROM employees ORDER BY first_name DESC

-- SELECT first_name, last_name, salary, SUM(salary * 0.15) AS PF
-- FROM employees
-- GROUP BY first_name, last_name, salary

-- SELECT employee_id, first_name, last_name, salary
-- FROM employees
-- ORDER BY salary ASC

-- SELECT SUM(salary)
-- FROM employees

-- SELECT MAX(salary),MIN(salary)
-- FROM employees

-- SELECT AVG(salary)
-- FROM employees

-- SELECT COUNT(*)
-- FROM employees

-- SELECT UPPER(first_name)
-- FROM employees

-- SELECT SUBSTRING(first_name, 1, 3 )
-- FROM employees

-- SELECT employees.first_name || ' ' || employees.last_name AS fullname
-- FROM employees


-- SELECT first_name, last_name,
-- length(employees.first_name || ' ' || employees.last_name) AS fullname
-- FROM employees

-- SELECT first_name FROM employees WHERE first_name ~ '[0-9]'

-- SELECT employee_id, first_name
-- FROM employees
-- LIMIT 10

-- Restricting And Sorting

-- SELECT first_name, last_name, salary
-- FROM employees
-- WHERE salary > 10000 AND salary < 15000

-- SELECT first_name, last_name, hire_date
-- FROM employees
-- WHERE hire_date >= '01-01-1987' AND hire_date <= '12-31-1987'

-- SELECT * 
-- FROM employees
-- WHERE first_name ~ 'c' AND first_name ~'e'

-- SELECT last_name, jobs.job_title, salary
-- FROM employees
-- INNER JOIN jobs ON jobs.job_id = employees.job_id
-- WHERE salary != 4500 AND salary != 10000 AND salary != 15000
-- AND job_title != 'Programmer' AND job_title != 'Shipping Clerk'

-- SELECT last_name 
-- FROM employees
-- WHERE LENGTH(last_name) = 6

-- SELECT last_name 
-- FROM employees
-- WHERE last_name LIKE '__e%'

-- SELECT DISTINCT job_title
-- FROM employees
-- INNER JOIN jobs ON jobs.job_id = employees.job_id

-- SELECT * FROM employees
-- WHERE last_name IN ('Jones', 'Blake', 'Scott', 'King', 'Ford')



