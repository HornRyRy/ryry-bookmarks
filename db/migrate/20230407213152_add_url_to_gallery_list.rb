class AddUrlToGalleryList < ActiveRecord::Migration[7.0]
  def change
    add_column :history_lists, :url, :string
  end
end
