class Favorite < ApplicationRecord
    has_many :galleries, through: :gallery_favorites
    has_many :gallery_favorites
    #belongs_to :galleries  #### do i need this belongs to??

end
