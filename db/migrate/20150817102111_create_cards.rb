class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.integer :price
      t.string  :name
      t.string  :description
      t.integer :left_number
      t.integer :top_number
      t.integer :right_number
      t.integer :bottom_number
      t.integer :lvl
      t.timestamps
    end
    add_index :cards, :price
    add_index :cards, :name
  end
end
