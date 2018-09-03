Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :projects, only: [:index, :create, :update, :destroy]
      resources :tasks, only: [:index, :create, :update, :destroy]
      resources :queries, only: [:index]
      mount_devise_token_auth_for 'User', at: 'auth', defaults: { format: "json" }
    end
  end
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
