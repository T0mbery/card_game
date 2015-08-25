class CartsController < ApplicationController

  before_filter :authenticate_user!
  before_action :set_cart, only: [:show, :destroy]
  before_action :render_404, only: [:index, :new, :update, :edit]
  

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
    @cart = Cart.new(cart_params)
    @cart.save
    respond_with(@cart)
  end

  def update        
  end

  def destroy
    @cart.destroy     
    current_user.update(balance: '2100')
    current_user.save      
    redirect_to controller: 'cards'
  end

  private
    def set_cart
      @cart = Cart.where(id: params[:id]).first      
      render_404 unless @cart
    end

    def cart_params
      params[:cart]
    end
end
