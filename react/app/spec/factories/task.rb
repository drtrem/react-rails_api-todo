FactoryGirl.define do

  factory :task do
    name                  'test'
    status                true
    project
  end

end 