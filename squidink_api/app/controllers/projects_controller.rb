class ProjectsController < ApplicationController

  def index # GET /projects
    @projects = Project.all
    render json: @projects
  end

  def show # GET /projects/#
    @projecct = Project.find_by_id(params[:id])
    render json: @project
  end

  def create # POST /projects
    if params[:project][:status] == 'SIGN_UP'
      @project = Project.new(project_params)
      if @project.save
        render json: @project, status: :created, location: @project
      else
        render json: @project.errors, status: :unprocessable_entity
      end
    elsif params[:project][:status] == 'SIGN_IN'
      @project = Project.find_by(projectname: params[:project][:projectname])
      return head(:forbidden) unless @project.authenticate(params[:project][:password])
      render json: @project, status: :created, location: @project
    end
  end

  def update # PATCH/PUT /projects/#
    if @project.update(project_params)
      render json: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  def destroy # DELETE /projects/#
    @project.destroy
  end

  private

  def set_project
    @project = Project.find(params[:id])
  end

  def project_params
    params.require(:project).permit(
      :projectname,
      :name,
      :bio,
      :email,
      :password_digest,
      :phone,
      :admin
    )
  end

end
