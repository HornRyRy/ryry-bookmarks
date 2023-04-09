class Favorite < ApplicationRecord
    has_many :favorites, through: :gallery_favorites
end
