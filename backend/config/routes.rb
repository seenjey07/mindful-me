Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions', registrations: 'users/registrations' }
  resources :users, only: [:show, :update, :destroy]
  resources :moods, only: [:create, :update, :show, :index, :destroy]
  resources :journals, only: [:create, :update, :show, :index, :destroy]
end