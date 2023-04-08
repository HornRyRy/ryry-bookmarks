class CreateHistoryLists < ActiveRecord::Migration[7.0]
  def change
    create_table :history_lists do |t|
      t.string :name

      t.timestamps
    end
  end
end
