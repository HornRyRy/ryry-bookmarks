class UsersController < ApplicationController

##skip_before_action :authorized_user, only: [:create]

def show
    user = current_user
    render json: user, status: :ok
end

def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
end

def destroy
    user = User.find(params[:id])
    user.destroy
    head :no_content
end

def index
    users = User.all
    render json: users, status: :ok
end

private

def user_params
    params.permit(:nickname, :email, :password)
end


end
