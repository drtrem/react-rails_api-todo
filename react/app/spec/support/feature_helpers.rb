module FeatureHelpers
  def sign_in_as(user)
    visit('http://localhost:3000/register')
    find(:css, '.email').set(user.email)
    find(:css, '.password').set(user.password)
    find('button').click
    visit('http://localhost:3000/')
    find(:css, '.email').set(user.email)
    find(:css, '.password').set(user.password)
    find('button').click
  end
end