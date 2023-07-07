Rails.application.routes.draw do
  namespace :v1 do
    resources :users
    resources :sessions
  end
  get "about", to:"about#index"

  get "sign_up", to: "registrations#new"
  post "sign_up", to: "registrations#create"

  root to: "main#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
