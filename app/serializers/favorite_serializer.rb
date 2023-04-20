class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :url
  
   has_many :gallery_favorites




end
