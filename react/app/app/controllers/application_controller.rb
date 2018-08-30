class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  include ActionController::Cookies
  def fallback_index_html
    render :file => 'public/index.html'
  end
end
