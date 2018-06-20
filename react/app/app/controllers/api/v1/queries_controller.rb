module Api::V1
  class QueriesController < ApplicationController

    def index
      @task_status = Task.find_by_sql("SELECT DISTINCT status
        FROM tasks
        ORDER BY status");
      
      @projects = Project.find_by_sql("SELECT projects.id, COUNT(tasks) AS task_count
        FROM tasks RIGHT JOIN projects
        ON tasks.project_id = projects.id
        GROUP BY projects.id
        ORDER BY task_count DESC");

      @projects2 = Project.find_by_sql("SELECT COUNT(*) AS amount, projects.name 
        FROM tasks INNER JOIN projects ON project_id = projects.id 
        GROUP BY projects.name 
        ORDER BY projects.name ASC");

      @task_n = Task.find_by_sql("SELECT * FROM tasks WHERE name like 'N%'");

      @projects_a = Project.find_by_sql("SELECT projects.name, COUNT(tasks) AS task_count
        FROM tasks RIGHT JOIN projects
        ON tasks.project_id = projects.id
        WHERE projects.name LIKE '%a%'
        GROUP BY projects.id");

      @task_duplicate = Task.find_by_sql("SELECT id, name
        FROM tasks
        WHERE name IN
        (SELECT name FROM tasks GROUP BY name HAVING COUNT(*) >1)
        ORDER BY name");

      @task_duplicate_all = Task.find_by_sql("SELECT tasks.name
        FROM tasks RIGHT JOIN projects
        ON tasks.project_id = projects.id
        WHERE projects.name = 'Garage' 
        GROUP BY tasks.name, tasks.status
        HAVING COUNT(tasks) > 1
        ORDER BY COUNT(tasks)");

      @project_10_task_true = Project.find_by_sql("SELECT projects.name 
        FROM projects RIGHT JOIN tasks 
        ON projects.id = tasks.project_id 
        WHERE status = true 
        GROUP BY projects.id HAVING COUNT(tasks) > 10
        ORDER BY projects.id");

      render json: {data: {task_status: @task_status, 
        projects: @projects, 
        projects2: @projects2, 
        task_n: @task_n,
        projects_a: @projects_a, 
        task_duplicate: @task_duplicate, 
        task_duplicate_all: @task_duplicate_all, 
        project_10_task_true: @project_10_task_true}}
    end
  end
end