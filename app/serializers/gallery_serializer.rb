class GallerySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :preview_pic
  belongs_to :users
end
