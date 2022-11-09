@api
Feature: Get List of users

  Scenario: Users details are returned successfully
    Given the reqRes API
    When client send GET request: '/users'
    Then response status should be successfull
    And response body should not be empty

  Scenario: User details are returned successfully
    Given the reqRes API
    When client send GET request: '/users/1'
    Then response status should be successfull
    And response body should not be empty