require 'rails_helper'

RSpec.describe Api::V1::TasksController, type: :controller do

  let(:project)   { create(:project) }

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

    it 'returns all tasks' do
      create_list(:task, 5)
      get :index, format: :json
      expect(json.length).to eq(5)
    end

  end

  describe 'POST create' do
    context 'with valid name' do
      it 'creates a task' do
        expect{
          post :create, params: { task: attributes_for(:task, project_id: project.id) }, as: :json
        }.to change(Task, :count).by(1)
      end
    end

    context 'with invalid name' do
      it 'does not create a task' do
        expect{ post :create, params: { task: attributes_for(:task, name: '') }, as: :json }
          .to_not change(Task, :count)
      end

      it 'returns an error' do
        post :create, params: { task: attributes_for(:task, name: '') }, as: :json
        expect(response.status).to eq 422
      end
    end
  end

  describe 'PATCH update' do
    context 'with valid name' do
      before(:each) do
        @task = create(:task)
        @attributes = attributes_for(:task, name: 'New task name')
      end

      it 'changes a task name' do
        patch :update, params: { id: @task, task: @attributes }, as: :json
        expect(@task.reload.name).to eq @attributes[:name]
      end

      it 'will not change projects count' do
        expect{ patch :update, params: { id: @task, task: @attributes }, as: :json }
          .to_not change(Task, :count)
      end

    end

    context 'with invalid name' do
      before(:each) do
        @task = create(:task)
        @attributes = attributes_for(:task, name: '')
      end

      it 'does not change a task name' do
        patch :update, params: { id: @task, task: @attributes }, as: :json
        expect(@task.reload.name).to_not eq @attributes[:name]
      end

      it 'returns an error' do
        patch :update, params: { id: @task, task: @attributes }, as: :json
        expect(response.status).to eq 422
      end
    end
  end

  describe 'DELETE destroy' do
    it 'deletes a task' do
      @task = create(:task)
      expect { delete :destroy, params: { id: @task }, as: :json }.to change(Task, :count).by(-1)
    end
  end

end
