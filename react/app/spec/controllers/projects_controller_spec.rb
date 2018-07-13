require 'rails_helper'

RSpec.describe Api::V1::ProjectsController, type: :controller do

  render_views
  let(:project)      { FactoryGirl.create :project }

  before do
    format = Mime[:JSON].to_s
    request.headers['Accept'] = format
    request.headers['Content-Type'] = format
  end

  describe 'GET index' do
    let(:json) { JSON.parse(response.body) }

    it 'returns a successful 200 response' do
      get :index, format: :json
      expect(response).to be_success
    end

    it 'returns all projects' do
      create_list(:project, 5)
      get :index, format: :json
      expect(json.length).to eq(5)
    end

  end

  describe 'POST create' do
    context 'with valid name' do
      it 'creates a project' do
        expect{
          post :create, params: { project: attributes_for(:project) }
        }.to change(Project, :count).by(1)
      end

      it 'will not create project if title present in database' do
        create(:project, title: 'same title')
        same_project_attributes = attributes_for(:project, name: 'same title')

        expect{ post :create, params: { project: same_project_attributes } }
          .to_not change(Project, :count)
      end
    end

    context 'with invalid title' do
      it 'does not create a project' do
        expect{ post :create, params: { project: attributes_for(:project, title: '') } }
          .to_not change(Project, :count)
      end

      it 'returns an error' do
        post :create, params: { project: attributes_for(:project, title: '') }
        expect(response.status).to eq 422
      end
    end
  end

end
