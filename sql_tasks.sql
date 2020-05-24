# Task 1
SELECT ID, DEPARTMENT_ID, CHIEF_ID, NAME, MAX(SALARY)
FROM EMPLOYEE
GROUP BY DEPARTMENT_ID;

# Task 2
SELECT ID
FROM DEPARTMENT
JOIN EMLOYEE
    ON DEPARTMENT.ID = EMPLOYEE.DEPARTMENT_ID
GROUP BY EMPLOYEE.DEPARTMENT_ID
HAVING COUNT(*) <= 3;

# Task 3
WITH previous_query AS (
    SELECT DEPARTMENT_ID, SUM(SALARY) AS SALARY_SUM
    FROM EMPLOYEE
    GROUP BY DEPARTMENT_ID
)
SELECT DEPARTMENT_ID, MAX(SALARY_SUM)
FROM previous_query;

# Task 4
SET @new_dep_id = 777;
SET @new_dep_name = "Some name";
INSERT INTO DEPARTMENT
VALUES (@new_dep_id, @new_dep_name);

# Task 5
SET @chief_id = 888;
INSERT INTO EMPLOYEE
VALUES (@new_dep_id, @chief_id, @chief_id, "John Adams", 50000);
INSERT INTO EMPLOYEE
VALUES (@new_dep_id, (@chief_id + 1), @chief_id, "Mike Ronalds", 10000);
INSERT INTO EMPLOYEE
VALUES (@new_dep_id, (@chief_id + 2), @chief_id, "Jane Salor", 7000);
INSERT INTO EMPLOYEE
VALUES (@new_dep_id, (@chief_id + 3), @chief_id, "Beth Laurence", 12000);

# Task 6
DELETE FROM EMPLOYEE
WHERE DEPARTMENT_ID = @new_dep_name;
DELETE FROM DEPARTMENT
WHERE ID = @new_dep_name;

# Task 7
SET @old_id = 111;
SET @new_id = 222;
UPDATE DEPARTMENT
SET ID = @new_id
WHERE ID = @old_id;
UPDATE EMPLOYEE
SET DEPARTMENT_ID = @new_id
WHERE DEPARTMENT_ID = @old_id;




