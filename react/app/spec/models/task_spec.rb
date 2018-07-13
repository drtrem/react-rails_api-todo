require 'rails_helper'

RSpec.describe Task, type: :model do

  subject(:task) { FactoryGirl.build :task }

  describe 'associations' do
    it { expect(task).to belong_to(:project) }
  end

  it 'respond_to' do
    methods = %i(id name status project_id)
    should respond_to(*methods)
  end

  it { should validate_presence_of :name }

end
 
