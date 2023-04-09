class User < ApplicationRecord
    has_secure_password

    ##email uniqueness check

    has_many :galleries, through: :gallery_favorites, dependent: :destroy

end
