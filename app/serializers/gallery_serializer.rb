class GallerySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :preview_pic
end
