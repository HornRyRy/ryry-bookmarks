class UsersController < ApplicationController

##skip_before_action :authorized_user, only: [:create]

##autologin -for refresh of browser
def show
    user = current_user
    if user 
        render json: user, status: :ok
    else
        render json: {error: "No user signed in. Please Log in."}, status: :unauthorized
    end
end

def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
end

## destroy if I want users to delete account

def destroy
    user = User.find(params[:id])
    user.destroy
    head :no_content
end



private

def user_params
    params.permit(:nickname, :email, :password)
end


end
