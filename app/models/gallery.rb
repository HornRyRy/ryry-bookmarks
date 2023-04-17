class Gallery < ApplicationRecord
    has_many :gallery_favorites
    has_many :favorites, through: :gallery_favorites
    belongs_to :user
    
    

    #this allows galleries.favorites.create
    #
end
