-- Create a database called bootcamp.
-- Create a table called students.
-- Add the following columns:
-- id
-- last_name
-- first_name
-- birth_date

-- CREATE TABLE students (
-- 	student_id serial PRIMARY KEY,
-- 	student_first_name varchar(50),
-- 	student_last_name varchar(50),
-- 	student_birth_date date
-- )

-- Insert
-- Insert the data seen above to the students table. Find the most efficient way to insert the data.
-- Insert your last_name, first_name and birth_date to the students table (Take a look at the id given).
-- INSERT INTO students (student_first_name, student_last_name, student_birth_date)
-- VALUES ('Marc', 'Benichou', '2/11/1998'),
-- ('Yoan', 'Cohen', '3/12/2010'),
-- ('Lea', 'Benichou', '27/07/1987'),
-- ('Amelia', 'Dux', '07/04/1996'),
-- ('David', 'Grez', '14/06/2003'),
-- ('Omer', 'Simpson', '03/10/1980'),
-- ('Olga', 'Kuskova', '15/06/1994')

-- Select
-- Fetch all of the data from the table.
-- SELECT student_id, student_first_name, student_last_name, student_birth_date 
-- FROM students
-- Fetch all of the students first_names and last_names.
-- SELECT student_first_name, student_last_name
-- FROM students
-- For the following questions, only fetch the first_names and last_names of the student
-- Fetch the student which id is equal to 2.
-- SELECT student_first_name, student_last_name FROM students WHERE student_id = 2
-- Fetch the student whose last_name is Benichou AND first_name is Marc.
-- SELECT student_first_name, student_last_name FROM students WHERE student_last_name = 'Benichou'
-- AND student_first_name= 'Marc'

-- Fetch the students whose last_names are Benichou OR first_names are Marc.
-- SELECT student_first_name, student_last_name FROM students WHERE student_last_name = 'Benichou' OR student_first_name= 'Marc'

--Fetch the students whose first_names contain the letter a.
-- SELECT student_first_name FROM students WHERE  student_first_name like '%a%'

-- Fetch the students whose first_names start with the letter a.
-- SELECT student_first_name FROM students WHERE  student_first_name like 'a%'

--Fetch the students whose first_names end with the letter a.
-- SELECT student_first_name FROM students WHERE  student_first_name like '%a'

-- Fetch the students whose second to last letter of their first_names are a (Example: Leah).
--SELECT student_first_name FROM students WHERE  student_first_name like '_%a%'

-- Fetch the students whose id’s are equal to 1 AND 3 .
-- SELECT  student_first_name, student_last_name FROM students WHERE student_id = 1 AND student_id = 3

--Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
SELECT student_first_name, student_last_name FROM students WHERE student_birth_date >= '1/01/2000'