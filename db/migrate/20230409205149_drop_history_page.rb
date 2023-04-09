class DropHistoryPage < ActiveRecord::Migration[7.0]
  def change
    drop_table :history_pages
  end
end
