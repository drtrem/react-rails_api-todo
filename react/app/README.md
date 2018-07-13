# README

https://blooming-dawn-18533.herokuapp.com/

ReactJS + Ruby on Rails API + Heroku App

Rails API with a separate frontend React app:

web: cd client && PORT=3000 npm start

api: PORT=3001 && bundle exec rails s

Functional:

★ create/update/delete projects

★ add tasks to my project

★ update/delete tasks

★ mark a task as 'done'

Technical requirements:

★ work like one page WEB application and should use AJAX technology, load and submit data without reloading a page

★ client side and server side validation

★ React-Redux

Future functional:

★ prioritize tasks into a project

★ choose deadline for task

Future technical requirements:

★ automated tests for the all functionality

★ user authentication solution and a user should only have access to their own projects and tasks


Given tables: 

● tasks (id, name, status, project_id)
● projects (id, name)


1. get all statuses, not repeating, alphabetically ordered

SELECT DISTINCT status

FROM tasks

ORDER BY status

2. get the count of all tasks in each project, order by tasks count descending

SELECT projects.id, COUNT(tasks) AS task_count

FROM tasks RIGHT JOIN projects

ON tasks.project_id = projects.id

GROUP BY projects.id

ORDER BY task_count DESC

3. get the count of all tasks in each project, order by projects names

SELECT COUNT(tasks), projects.name 

FROM tasks INNER JOIN projects ON tasks.project_id = projects.id 

GROUP BY projects.name 

ORDER BY projects.name ASC


4. get the tasks for all projects having the name beginning with “N” letter

SELECT * FROM tasks WHERE name like 'N%'

5. get the list of all projects containing the ‘a’ letter in the middle of the name, and show the 
tasks count near each project. Mention that there can exist projects without tasks and 
tasks with project_id=NULL

SELECT projects.name, COUNT(projects)

FROM tasks RIGHT JOIN projects

ON tasks.project_id = projects.id

WHERE projects.name LIKE '%a%'

GROUP BY projects.id

6. get the list of tasks with duplicate names. Order alphabetically

SELECT id, name

FROM tasks

WHERE name IN

(SELECT name FROM tasks GROUP BY name HAVING COUNT(tasks) >1)

ORDER BY name

7. get the list of tasks having several exact matches of both name and status, from the 
project ‘Garage’. Order by matches count

SELECT tasks.name

FROM tasks RIGHT JOIN projects

ON tasks.project_id = projects.id

WHERE projects.name = 'Garage' 

GROUP BY tasks.name, tasks.status

HAVING COUNT(tasks) > 1

ORDER BY COUNT(tasks)

8. get the list of project names having more than 10 tasks in status ‘completed’. Order by 
project_id

SELECT projects.name 

FROM projects RIGHT JOIN tasks 

ON projects.id = tasks.project_id 

WHERE status = true 

GROUP BY projects.id HAVING COUNT(tasks) > 10

ORDER BY projects.id