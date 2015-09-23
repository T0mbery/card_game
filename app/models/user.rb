class User < ActiveRecord::Base

  has_one :cart
  
  validates :balance, numericality: { greater_than_or_equal_to: 0 }
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
                
end
