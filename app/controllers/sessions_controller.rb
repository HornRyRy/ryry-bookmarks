class SessionsController < ApplicationController

    def create
        user = User.find_by(email:params[:email])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id           #can't initialize session without this
            render json:user, status: :ok
            
        else
            render json: {error: "Invalid Username and/or Password"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

end
