Given (/^I am logged in$/) do

  # be sure to use the right browser session
  Capybara.session_name = 'test'

  # logout - just to be sure
  visit '/index.php?logout=true'
  visit '/'
  fill_in 'user', with: 'test'
  fill_in 'password', with: "test"
  click_button 'submit'

  # if visibility is not set to false it will fail
  page.should have_selector('a#logout', :visible => false)
end

Given (/^I am in the "([^"]+)" app$/) do |app|
  visit "/index.php/apps/#{app}/"
  page.should have_selector('a#logout', :visible => false)
end

When (/^I click on the add new button$/) do
  click_link 'Add Website'
end

Then (/^I should see a form to add feeds and folders$/) do
  selector = "//*[contains(@class,\"add-new-popup\")]"
  page.should have_selector(:xpath, selector)
end