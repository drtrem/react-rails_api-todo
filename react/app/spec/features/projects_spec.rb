require "rails_helper"
feature 'Projects', type: :feature, js: true do

  background do
    visit('http://localhost:3000/')
  end

  scenario 'have main projects container' do
    expect(page).to have_css('.App')
  end

  scenario 'project form' do
    expect(page).to have_css('.input-project')
  end

  scenario 'have add project button' do
    expect(page).to have_css('.add-project')
  end

  scenario 'create project' do
    find(:css, 'input.input-project').set('new project name')
    find('.add-project').click

    expect(page).to have_text('new project name')
  end

  scenario 'project dont create if name is blank' do
    count = page.all('.project').size
    find('.input-project').set('')
    find('.add-project').click

    page.all('.project').size == count
  end

  scenario 'deleting project' do
    find(:css, 'input.input-project').set('project name delete')
    find('.add-project').click

    expect(page).to have_text('project name delete')

    all('.delete-button-top').last.click

    expect(page).to_not have_text('project name delete')
  end

  scenario 'edit project name' do
    find(:css, 'input.input-project').set('some original name')
    find('.add-project').click

    expect(page).to have_text('some original name')

    all('.edit-button-top').last.click
    find(:css, 'input.change-project-input').set('new project name')
    find('.edit').click

    expect(page).to_not have_text('some original name')
    expect(page).to have_text('new project name')

  end

  scenario 'change project name to "" ' do
    find(:css, 'input.input-project').set('some original name')
    find('.add-project').click

    expect(page).to have_text('some original name')

    count = page.all('.project').size
    all('.edit-button-top').last.click
    find(:css, 'input.change-project-input').set('')
    find('.edit').click

    page.all('.project').size == count
  end
end 