class FavoritesController < ApplicationController


    #link up your user id categories

    def index
        favorites = Favorite.all
        render json: favorites, status: :ok
    end

    def create
        favorite = Favorite.create!(favorite_params)
        render json: favorite, status: :created
    end

    def update
        Favorite.update!(favorite_params)
        render json: @favorite, status: :accepted
    end

    def destroy
        @favorite.destroy
        head :no_content
    end

    private

    def favorite_params
        params.permit(:url, :user_id, :gallery_id)
    end

end
