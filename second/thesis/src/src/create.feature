# encoding: utf-8
Feature: create_new
	In order to start using the news rss reader
	As a user
	I want to be able to add feeds and folders

	Background:
		Given I am logged in
		And I am in the "news" app

	Scenario: show add website dialogue
		When I click on the add new button
		Then I should see a form to add feeds and folders