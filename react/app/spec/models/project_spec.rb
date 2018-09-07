require 'rails_helper'

RSpec.describe Project, type: :model do

  subject(:project) { FactoryBot.build :project }

  it { should belong_to :user }
  it { should have_many :tasks }

  it { should be_valid }

  it { should respond_to :id }
  it { should respond_to :name }

  it { should validate_presence_of :name }
    
  describe 'default scope' do
    let!(:project_one) { create(:project, id:2) }
    let!(:project_two) { create(:project, id:3) }

    it 'orders by ascending name' do
      expect(Project.all) == [project_two, project_one]
    end
  end

end
