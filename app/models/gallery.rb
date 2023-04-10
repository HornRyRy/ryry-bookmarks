class Gallery < ApplicationRecord
    has_many :gallery_favorites
    belongs_to :users
end
