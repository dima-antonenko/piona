class StaticController < ApplicationController
	def home
		@slider_text = SiteVariable.where(place: "block_in_slider").first.value
		@slider = Slider.first
		@banners = Banner.all
		@products = Product.limit(4).order(created_at: :desc)
		@posts = Post.limit(4).order(created_at: :desc)
		@text_home = SiteVariable.where(place: "page_home")

		@text_footer = SiteVariable.where(place: "footer")
		render 'home'
	end

	def delivery_and_pay
		@text_delivery_and_pay = SiteVariable.where(place: "page_delivery_pay")
		render 'delivery_and_pay'
	end

	def contacts
		@text_contacts = SiteVariable.where(place: "page_contact")
		render 'contacts'
	end
end
