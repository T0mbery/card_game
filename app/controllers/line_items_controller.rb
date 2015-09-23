class LineItemsController < ApplicationController

  include CurrentCart
  before_filter :authenticate_user!
  before_action :set_cart, only: [:create]
  before_action :set_line_item, only: [:destroy]
  before_action :render_404, only: [:index, :new, :update, :edit, :show]

  respond_to :html

  def index
  end

  def show  
  end

  def new
  end

  def edit
  end

  def create
    card = Card.find(params[:card_id])    
    @line_item = @cart.line_items.build(card: card)   
    current_user.decrement(:balance, @line_item.card.price).save
    I18n.locale = :ru
    if current_user.errors.empty?
      @line_item.save
      session[:money] = current_user[:balance]            
      redirect_to cart_path(@cart)
    else
      session[:money] = t("not enough")
      redirect_to cart_path(@cart), alert: t("not enough coins")    
    end       
  end

  def update
  end

  def destroy
    @line_item.destroy
    respond_with(@line_item)
  end

  private
  
  def set_line_item
    unless @line_item = LineItem.find(params[:id])
      render_404
    end
  end              
    
end

