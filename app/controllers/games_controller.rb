class GamesController < ApplicationController

  before_filter :authenticate_user! 
  before_action :render_404, except: [:index]   

  respond_to :html

  def index
    @cart = Cart.find(session[:cart_id])
    rand_cards    
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
  
  private
  
  def game_params
    params.require(:game).permit(:image)
  end
  
  def rand_cards
    card = Card.all
    arr = [1, 2, 3, 4, 5] 
    @card_game = arr.map do
      @card_game = Card.find(rand(1..card.count))
    end        
  end
  
  
end




