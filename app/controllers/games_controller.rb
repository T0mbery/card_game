class GamesController < ApplicationController

  before_filter :authenticate_user! 
  before_action :render_404, except: [:index]   

  respond_to :html

  def index
    @cart = Cart.find(session[:cart_id])
    @card_game = Card.find_by_sql("SELECT * FROM cards ORDER BY RANDOM() LIMIT 5")     
  rescue ActiveRecord::RecordNotFound
    render file: "public/game_not_exist.html", status: 404         
  end

  def show
  end

  def new 
  end

  def edit
  end

  def create    
  end

  def update
  end

  def destroy
  end
  
end




