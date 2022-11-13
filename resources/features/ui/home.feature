@ui
Feature: Home page

Business Need: As a user I want check my home page behaviour

  Scenario: Home page logo details
    Given the homepage
    When user clicks on Health tab
    Then video player should not be visible