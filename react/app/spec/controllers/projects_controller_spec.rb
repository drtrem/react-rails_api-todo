require 'rails_helper'

RSpec.describe Api::V1::ProjectsController, type: :controller do

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
          post :create, params: { project: attributes_for(:project) }, as: :json
        }.to change(Project, :count).by(1)
      end
    end

    context 'with invalid name' do
      it 'does not create a project' do
        expect{ post :create, params: { project: attributes_for(:project, name: '') }, as: :json }
          .to_not change(Project, :count)
      end

      it 'returns an error' do
        post :create, params: { project: attributes_for(:project, name: '') }, as: :json
        expect(response.status).to eq 422
      end
    end
  end

  describe 'PATCH update' do
    context 'with valid name' do
      before(:each) do
        @project = create(:project)
        @attributes = attributes_for(:project, name: 'New project name')
      end

      it 'changes a project name' do
        patch :update, params: { id: @project, project: @attributes }, as: :json
        expect(@project.reload.name).to eq @attributes[:name]
      end

      it 'will not change projects count' do
        expect{ patch :update, params: { id: @project, project: @attributes }, as: :json }
          .to_not change(Project, :count)
      end

    end

    context 'with invalid name' do
      before(:each) do
        @project = create(:project)
        @attributes = attributes_for(:project, name: '')
      end

      it 'does not change a project name' do
        patch :update, params: { id: @project, project: @attributes }, as: :json
        expect(@project.reload.name).to_not eq @attributes[:name]
      end

      it 'returns an error' do
        patch :update, params: { id: @project, project: @attributes }, as: :json
        expect(response.status).to eq 422
      end
    end
  end

  describe 'DELETE destroy' do
    it 'deletes a project' do
      @project = create(:project)
      expect { delete :destroy, params: { id: @project }, as: :json }.to change(Project, :count).by(-1)
    end
  end

end
