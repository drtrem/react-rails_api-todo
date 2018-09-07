require "rails_helper"
feature 'Tasks', type: :feature, js: true do

  let(:user) { FactoryBot.create :user  }

  before(:each) do
    sign_in_as(user)
    find(:css, 'input.input-project').set('new project name')
    find('.add-project').click
  end

  scenario 'have main tasks container' do
    expect(page).to have_css('.App')
  end

  scenario 'task form' do
    expect(page).to have_css('.input-task')
  end

  scenario 'have add task button' do
    expect(page).to have_css('.input-task-button')
  end

  scenario 'create task' do
    all(:css, 'input.input-task').first.set('new task name')
    all('.input-task-button').first.click

    expect(page).to have_text('new task name')
  end

  scenario 'task dont create if name is blank' do
    count = page.all('.single-task').size
    all(:css, 'input.input-task').first.set('')
    all('.input-task-button').first.click

    page.all('.single-task').size == count
  end

  scenario 'deleting task' do
    all(:css, 'input.input-task').first.set('task name delete')
    all('.input-task-button').first.click

    expect(page).to have_text('task name delete')

    all('.delete-button').last.click

    expect(page).to_not have_text('task name delete')
  end

  scenario 'edit task name' do
    all(:css, 'input.input-task').first.set('edit task name')
    all('.input-task-button').first.click

    expect(page).to have_text('edit task name')

    all('.edit-button').first.click
    find(:css, 'input.edit-task-input').set('edit new task name')
    find('.add-task-btn-task').click

    expect(page).to_not have_text('edit task name')
    expect(page).to have_text('edit new task name')

  end

  scenario 'change task name to "" ' do
    all(:css, 'input.input-task').first.set('some original name')
    all('.input-task-button').first.click

    expect(page).to have_text('some original name')

    count = page.all('.single-task').size
    all('.edit-button').first.click
    find(:css, 'input.edit-task-input').set('')
    find('.add-task-btn-task').click

    page.all('.single-task').size == count
  end

  scenario 'set task as done' do
    all(:css, 'input.input-task').first.set('new task description')
    all('.input-task-button').first.click

    all('.checkbox').last.set(true)
    all('.checkbox').last == true
  end

  context 'up down task' do
    before(:each) do
      all(:css, 'input.input-task').first.set('new task description')
      all('.input-task-button').first.click
      all(:css, 'input.input-task').first.set('some new task description')
      all('.input-task-button').first.click
    end

    scenario 'set task up' do
      all('.up').last.click
      expect(all(:css, 'span.taskname').first).to have_text('some new task description')
    end

    scenario 'set task down' do
      all('.down').first.click
      expect(all(:css, 'span.taskname').first).to have_text('some new task description')
    end
  end
end 