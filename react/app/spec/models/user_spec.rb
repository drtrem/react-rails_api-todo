require 'rails_helper'

RSpec.describe User, type: :model do

  subject(:user) { FactoryBot.build :user }

  it { should validate_presence_of :email }
  it { should validate_presence_of :password }
end