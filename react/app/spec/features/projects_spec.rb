feature 'Projects', js: true do

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
    find('.input-project center-block').set('new project name')
    find('.add center-block').click

    expect(page).to have_text('new project name')
  end

  scenario 'project dont create if name is blank' do
    find('.input-project center-block').set('')
    find('.add center-block').click

    expect(page).to_not have_css('.col-lg-offset-2 col-lg-8 task')
  end

  scenario 'deleting project' do
    find('.input-project center-block').set('project name')
    find('.add center-block').click

    expect(page).to have_text('project name')

    all('.projects-container').first.hover
    find('.delete-button-top').click

    expect(page).to_not have_css('.col-lg-offset-2 col-lg-8 task')
  end

  scenario 'edit project name' do
    find('.input-project center-block').set('some original name')
    find('.add center-block').click

    expect(page).to have_text('some original name')

    all('.projects-container').first.hover
    all('edit-button-top').first.click
    all('.change-project inputtop').first.set('new project name')
    find('.add-task-btn edit').click

    expect(page).to_not have_text('some original name')
    expect(page).to have_text('new project name')

  end

  scenario 'change project name to "" ' do
    find('.input-project center-block').set('some original name')
    find('.add center-block').click

    expect(page).to have_text('some original name')

    all('.projects-container').first.hover
    all('edit-button-top').first.click
    all('.change-project inputtop').first.set('')
    find('.add-task-btn edit').click

    expect(page).to have_text('Заполните это поле')
  end
end 