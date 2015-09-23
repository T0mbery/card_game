CardGame::Application.routes.draw do

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  
  root to: "home#index"
  
  get 'home/show'
  
  resources :games   
  resources :cards
  resources :carts
  resources :line_items
   
  
  devise_for :users 

end
