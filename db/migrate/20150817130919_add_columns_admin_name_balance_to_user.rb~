class AddColumnsAdminNameBalanceToUser < ActiveRecord::Migration
  def change
    add_column :users, :admin, :boolean, :default => false
    add_column :users, :name, :string
    add_column :users, :balance, :integer, :default => 2100
  end
end
