module Api::V1
class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :update, :destroy]

  # GET /projects
  def index
    @projects = Project.find_by_sql("SELECT *
      FROM Projects INNER JOIN Tasks
      ON Projects.id = Tasks.project_id");

    render json: @projects
  end

  # GET /projects/1
  def show
    render json: @project
  end

  # POST /projects
  def create
    @project = Project.new(project_params)

    if @project.save
      render json: @project, status: :created
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /projects/1    
  def update      
       if @project.update(project_params)        
          render json: @project
       else        
          render json: @project.errors, status: :unprocessable_entity      
       end
  end

  # DELETE /projects/1
  def destroy
    @project.destroy
    if @project.destroy
      head :no_content, status: :ok
    else
      render json: @project.errors, status: :unprocessable_entity
    end      
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def project_params
      params.require(:project).permit(:name)
    end
end
end