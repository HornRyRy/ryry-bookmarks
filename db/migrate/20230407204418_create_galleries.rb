class CreateGalleries < ActiveRecord::Migration[7.0]
  def change
    create_table :galleries do |t|
      t.string :name
      t.string :description
      t.string :preview_pic

      t.timestamps
    end
  end
end
