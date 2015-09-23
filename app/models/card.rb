class Card < ActiveRecord::Base

  has_many :line_items
  
  validates :price, numericality: { greater_than: 0 }
  validates :name, :description, :lvl, presence: true   

  has_attached_file :image, styles: {large: "350x350>", medium: "270x270>", thumb: "150x150#"}
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/  
    
end
