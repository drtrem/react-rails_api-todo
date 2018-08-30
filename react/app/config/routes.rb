Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :projects
      resources :tasks
      resources :queries, only: [:index]
      #devise_for :users
      #resources :users
      mount_devise_token_auth_for 'User', at: 'auth', defaults: { format: "json" }
    end
  end
  #mount_devise_token_auth_for 'User', at: '/api/v1/auth'
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
