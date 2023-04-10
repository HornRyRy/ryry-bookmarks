class GalleriesController < ApplicationController

    def show
        gallery = Gallery.find(params[:id])
    end

    def index
        galleries = Gallery.all
        render json: galleries, status: :ok
    end

    def create
        gallery = Gallery.create!(gallery_params)
        
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
        params.permit(:name, :description, :"preview_pic")
    end
end
