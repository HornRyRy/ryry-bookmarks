class Favorite < ApplicationRecord
    has_many :galleries, through: :gallery_favorites
end
