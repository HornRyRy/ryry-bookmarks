class UserSerializer < ActiveModel::Serializer
  attributes :id, :nickname, :email, :password_digest
   # need foreign key for this relationship
  #has_many :galleries
end
