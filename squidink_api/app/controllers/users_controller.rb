class UsersController < ApplicationController

  def index # GET /users
    @users = User.all
    render json: @users
  end

  def show # GET /users/#
    @user = User.find_by_id(params[:id])
    render json: @user
  end

  def create # POST /users
    if params[:user][:status] == 'SIGN_UP'
      @user = User.new(user_params)
      if @user.save
        render json: @user, status: :created, location: @user
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    elsif params[:user][:status] == 'SIGN_IN'
      @user = User.find_by(username: params[:user][:username])
      return head(:forbidden) unless @user.authenticate(params[:user][:password])
      render json: @user, status: :created, location: @user
    end
  end

  def update # PATCH/PUT /users/#
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy # DELETE /users/#
    @user.destroy
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(
      :username,
      :name,
      :bio,
      :email,
      :password_digest,
      :phone,
      :admin
    )
  end

end
