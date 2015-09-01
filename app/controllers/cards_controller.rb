class CardsController < ApplicationController

  before_filter :authenticate_user!
  before_filter :find_card,      only: [:show, :edit, :update, :destroy]
  before_filter :check_if_admin, only: [:edit, :update, :destroy, :new, :create]  
  
  def index
    if current_user.admin?
      @cards      = Card.all      
      redirect_to controller: 'Administrator'      
    else      
      @cards       = Card.all
      @cards_ten   = Card.where(lvl: '10')
      @cards_nine  = Card.where(lvl: '9')
      @cards_eight = Card.where(lvl: '8')
      @cards_seven = Card.where(lvl: '7')
      @cards_six   = Card.where(lvl: '6')
      @cards_five  = Card.where(lvl: '5')
    end
  end
  
  def create
    @card = Card.create(card_params)
    if @card.errors.empty?
      redirect_to card_path(@card)
    else
      render "new"
    end
  end
  
  def new
    @card = Card.new
  end
  
  def show
    if @card
      render "cards/show"
    else
      render text: "Page not found", status: 404
    end  
  end
  
  def update
    @card.update_attributes(card_params)
    if @card.errors.empty?
      redirect_to card_path(@card)
    else
      render "edit"
    end
  end
  
  def edit
      
  end
  
  def destroy
    @card.destroy
    redirect_to action: "index"
  end
  
  private
  
  def card_params
    params.require(:card).permit(:name, :description, :price, :image, :lvl, :left_number, :top_number, :right_number, :bottom_number)
  end
  
  def find_card
    @card = Card.where(id: params[:id]).first
    render_404 unless @card
  end
      
end
