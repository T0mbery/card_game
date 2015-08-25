class HomeController < ApplicationController

  before_action :render_404, except: [:index, :show]

  def index
    if user_signed_in?
      redirect_to cards_path
    end
  end
  
  def show
        
  end


end
