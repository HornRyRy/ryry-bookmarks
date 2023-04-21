class FavoritesController < ApplicationController


    #link up your user id categories

    def index
        ##TODO - need current user's favorites
        favorites = Favorite.all
        render json: favorites, include:["gallery_favorites", "gallery_favorites.gallery"], status: :ok
    end

    def create
        ##see below -RJH
        gallery = Gallery.find_by(id: params[:gallery_id])
        favorite = gallery.favorites.create!(favorite_params)
        render json: favorite, status: :created
    end

    def update

        favorite = Favorite.find(params[:id])
        favorite.update!(favorite_params)
        render json: favorite, status: :accepted
    end

    def destroy
        # @favorite.destroy
        # head :no_content
        favorite= Favorite.find_by(id: params[:id])
        if favorite
            favorite.destroy
            head :no_content
        else
            render json: {error: "favorite not found"}, status: :not_found
        end
    end

    private

    def favorite_params
        params.permit(:url, :user_id, :gallery_id)
    end

end
