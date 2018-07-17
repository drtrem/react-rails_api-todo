require "rails_helper"
feature 'Tasks', type: :feature, js: true do

  background do
    visit('http://localhost:3000/')
  end

  #before(:each) do
  #  find(:css, 'input.input-project').set('new project name')
  #  find('.add-project').click
  #end

  scenario 'have main tasks container' do
    expect(page).to have_css('.App')
  end

  scenario 'tasks form' do
    expect(page).to have_css('.input-task')
  end

  scenario 'have add tasks button' do
    expect(page).to have_css('.input-task-button')
  end

  scenario 'create tasks' do
    all(:css, 'input.input-task').first.set('new task name')
    all('.input-task-button').first.click

    expect(page).to have_text('new task name')
  end

  scenario 'project dont create if name is blank' do
    count = page.all('.single-task').size
    all(:css, 'input.input-task').first.set('')
    all('.input-task-button').first.click

    page.all('.single-task').size == count
  end

  scenario 'deleting project' do
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

    all('.edit-button').last.click
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
    all('.edit-button').last.click
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
end 