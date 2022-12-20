$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homepage.feature");
formatter.feature({
  "line": 2,
  "name": "Home Page Test",
  "description": "as a user i want to navigate to tabs",
  "id": "home-page-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 6652674600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to desktop page successfully",
  "description": "",
  "id": "home-page-test;user-should-navigate-to-desktop-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "i am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "i mouse hover to desktop tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "i click on show all desktop",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "verify desktop text message",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 178527600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverToDesktopTab()"
});
formatter.result({
  "duration": 26100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnShowAllDesktop()"
});
formatter.result({
  "duration": 19100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.verifyDesktopTextMessage()"
});
formatter.result({
  "duration": 32800,
  "status": "passed"
});
formatter.after({
  "duration": 800687400,
  "status": "passed"
});
formatter.before({
  "duration": 5364775700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should navigate to laptop and notebooks page successfully",
  "description": "",
  "id": "home-page-test;user-should-navigate-to-laptop-and-notebooks-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "i am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "i mouse hover to laptop and desktop tab",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "i click on show all laptop and notebooks",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "verify laptop and notebooks text",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 26100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverToLaptopAndDesktopTab()"
});
formatter.result({
  "duration": 19800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnShowAllLaptopAndNotebooks()"
});
formatter.result({
  "duration": 22200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.verifyLaptopAndNotebooksText()"
});
formatter.result({
  "duration": 22300,
  "status": "passed"
});
formatter.after({
  "duration": 802474700,
  "status": "passed"
});
formatter.before({
  "duration": 5331007200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should navigate to components page successfully",
  "description": "",
  "id": "home-page-test;user-should-navigate-to-components-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "i am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "i mouse hover to component tab",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "i click on show all components",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "verify components text",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 26400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iMouseHoverToComponentTab()"
});
formatter.result({
  "duration": 25500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iClickOnShowAllComponents()"
});
formatter.result({
  "duration": 31100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.verifyComponentsText()"
});
formatter.result({
  "duration": 24600,
  "status": "passed"
});
formatter.after({
  "duration": 800546200,
  "status": "passed"
});
});