class GalleriesController < ApplicationController

    def show
        gallery = Gallery.find(params[:id])
    end

    def index
        galleries = current_user.galleries            #not .all
        
        render json: galleries, status: :ok
    end

    def create
        ## use logged in user to create current user gallery relationship
        user = current_user
        
        gallery = user.galleries.create!(gallery_params)  #method of galleries FYI
        render json: gallery, status: :accepted
    end

    def update
        Gallery.update!(gallery_params)
        render json: @gallery, status: :accepted
    end

    def destroy
        @gallery.destroy
        head :no_content
    end

    private
    def gallery_params
        params.permit(:name, :description, :preview_pic, :user_id, :favorite_id)
    end
end
