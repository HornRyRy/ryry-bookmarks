class AddCategoryToFavorites < ActiveRecord::Migration[7.0]
  def change
    add_column :favorites, :category, :string
  end
end
