class GalleryFavorite < ApplicationRecord
  belongs_to :gallery
  belongs_to :favorite
end
