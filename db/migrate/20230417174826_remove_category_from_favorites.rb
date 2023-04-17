class RemoveCategoryFromFavorites < ActiveRecord::Migration[7.0]
  def change
    remove_column :favorites, :category
  end
end
