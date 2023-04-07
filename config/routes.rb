Rails.application.routes.draw do
  resources :gallery_favorites
  resources :favorites
  resources :galleries
  resources :gallery_lists
  resources :history_pages
  resources :history_lists
  resources :users


 #history
 get '/history', to: "history_list#index"
  
  #auth
  get '/authorized', to: "users#show"
  
  post "/login", to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  get '/users', to: 'users#index'
  get '/user', to: 'users#destroy'

  #signup 
  post "/signup", to: "users#create"

  #dummyCode
  get '/hello', to: 'application#hello_world'

end
