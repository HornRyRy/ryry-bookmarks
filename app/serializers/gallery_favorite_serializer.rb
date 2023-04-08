class GalleryFavoriteSerializer < ActiveModel::Serializer
  attributes :id
  has_one :gallery
  has_one :favorite
end
