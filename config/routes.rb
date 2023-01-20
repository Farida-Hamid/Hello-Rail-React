Rails.application.routes.draw do
  resources :greeting
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # root "greeting#index"

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    resources :greetings
  end
end
