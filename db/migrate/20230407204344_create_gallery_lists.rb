class CreateGalleryLists < ActiveRecord::Migration[7.0]
  def change
    create_table :gallery_lists do |t|

      t.timestamps
    end
  end
end
