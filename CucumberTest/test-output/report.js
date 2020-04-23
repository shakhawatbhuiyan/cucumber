$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/features/NewAccount.feature");
formatter.feature({
  "line": 1,
  "name": "client should be able to add New Account",
  "description": "",
  "id": "client-should-be-able-to-add-new-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Clien should be able to New Account",
  "description": "",
  "id": "client-should-be-able-to-add-new-account;clien-should-be-able-to-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click New Account",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user inputs\"\u003ctittle\u003e\" and \"\u003cdescription\u003e\" and \"\u003cbalance\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "after login close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "client-should-be-able-to-add-new-account;clien-should-be-able-to-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "tittle",
        "description",
        "balace"
      ],
      "line": 12,
      "id": "client-should-be-able-to-add-new-account;clien-should-be-able-to-new-account;;1"
    },
    {
      "cells": [
        "techfiosdemo@gmail.com",
        "abc123",
        "retirment",
        "saving",
        "10000"
      ],
      "line": 13,
      "id": "client-should-be-able-to-add-new-account;clien-should-be-able-to-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Clien should be able to New Account",
  "description": "",
  "id": "client-should-be-able-to-add-new-account;clien-should-be-able-to-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"techfiosdemo@gmail.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click New Account",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user inputs\"retirment\" and \"saving\" and \"\u003cbalance\u003e\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "after login close the browser",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "techfiosdemo@gmail.com",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 42
    }
  ],
  "location": "StepsDefinition.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "StepsDefinition.after_login_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});