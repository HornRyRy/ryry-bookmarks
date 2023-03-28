class SessionsController < ApplicationController

    def create
        user = User.find_by(name:params[:name])
        if user && user.authenticate(params[:password])
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
