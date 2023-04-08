class CreateHistoryPages < ActiveRecord::Migration[7.0]
  def change
    create_table :history_pages do |t|
      t.string :name
      t.string :preview_pic_url
      t.string :url

      t.timestamps
    end
  end
end
