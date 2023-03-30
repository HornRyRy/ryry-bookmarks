class ApplicationController < ActionController::API
    include ActionController::Cookies


  ##errorhandling TODO
  ##authorize TODO

    def hello_world
      session[:count] = (session[:count] || 0) + 1
      render json: { count: session[:count] }
    end

    #instance variable to be inherited by children
    def current_user
      @user = User.find_by(id: session[:user_id])
    end


end
