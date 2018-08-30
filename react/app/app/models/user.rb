class User < ApplicationRecord
  has_many :projects, dependent: :destroy
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  #before_save -> { skip_confirmation! }

  devise :database_authenticatable, :registerable,
        :rememberable, :trackable, :validatable

  include DeviseTokenAuth::Concerns::User
end
