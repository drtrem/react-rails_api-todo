Rails.application.routes.draw do
  namespace :api do
      namespace :v1 do
        resources :projects
        resources :tasks
        resources :queries
      end
  end
end
