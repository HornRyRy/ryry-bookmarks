Rails.application.routes.draw do
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/hello', to: 'application#hello_world'

  post "/login", to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  get '/authorized', to: "users#show"

  #signup 
  post "/signup", to: "users#create"


end
