class GallerySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :preview_pic
  has_many :favorites
  belongs_to :user
end
