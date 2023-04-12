class ApplicationController < ActionController::API
    include ActionController::Cookies

    #before action


  ##errorhandling TODO
  ##authorize TODO



    #instance variable to be inherited by children
    def current_user
      @user = User.find_by(id: session[:user_id])
    end


end
