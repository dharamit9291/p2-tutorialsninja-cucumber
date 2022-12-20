@regression
Feature: Home Page Test
  as a user i want to navigate to tabs

  Scenario: User should navigate to desktop page successfully

    Given i am on home page
    And i mouse hover to desktop tab
    And i click on show all desktop
    Then verify desktop text message


  Scenario: User should navigate to laptop and notebooks page successfully

    Given i am on home page
    And i mouse hover to laptop and desktop tab
    And i click on show all laptop and notebooks
    Then verify laptop and notebooks text

  Scenario: User should navigate to components page successfully

    Given i am on home page
    And i mouse hover to component tab
    And i click on show all components
    Then verify components text