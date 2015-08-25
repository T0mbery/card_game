class AdministratorController < ApplicationController

  before_filter :find_card,      only: [:show, :edit, :update, :destroy]
  before_filter :check_if_admin, only: [:index, :edit, :update, :destroy, :new, :create]
  before_filter :authenticate_user!
  
  layout "admin"


  def index    
    @cards      = Card.all
    @cardsTen   = Card.where(lvl: '10')
    @cardsNine  = Card.where(lvl: '9')
    @cardsEight = Card.where(lvl: '8')
    @cardsSeven = Card.where(lvl: '7')
    @cardsSix   = Card.where(lvl: '6')
    @cardsFive  = Card.where(lvl: '5')      
  end


end
