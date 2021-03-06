class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  
  
  before_filter :update_sanitized_params, if: :devise_controller?
  def update_sanitized_params
    devise_parameter_sanitizer.for(:sign_up) {|u| u.permit(:name, :email, :password, :password_confirmation)}
    devise_parameter_sanitizer.for(:account_update) {|u| u.permit(:name)}
  end
  
  private
  
  def render_403
    render file: "public/403.html", status: 403
  end
  
  def render_404
    render file: "public/404.html", status: 404
  end
  
  def check_if_admin
    render_403 unless current_user.admin == true
  end
  
    
  
end
