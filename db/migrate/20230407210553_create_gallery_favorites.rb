class CreateGalleryFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :gallery_favorites do |t|
      t.references :gallery, null: false, foreign_key: true
      t.references :favorite, null: false, foreign_key: true

      t.timestamps
    end
  end
end
