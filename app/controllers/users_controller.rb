class UsersController < ApplicationController


  def sign_out
    @line_item = LineItem.all
    @line_item.destroy
    super
  end


end
