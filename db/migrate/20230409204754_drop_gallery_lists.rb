class DropGalleryLists < ActiveRecord::Migration[7.0]
  def change
    drop_table :gallery_lists
  end
end
