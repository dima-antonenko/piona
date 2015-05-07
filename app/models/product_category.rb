class ProductCategory < ActiveRecord::Base
	has_many :product_categories
	belongs_to :product_category
	has_many :products, dependent: :destroy

	has_attached_file :avatar, :styles => { :medium => "303x244>", :thumb => "220x180" }, :default_url => "/images/:style/missing.png"

    validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/
    validates :name, presence: true
end
