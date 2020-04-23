Feature: client should be able to add New Account
         
Scenario Outline: Clien should be able to New Account 
      
Given user is already in login page 
When user enters "<username>" and "<password>" 
When user click New Account
When user inputs"<tittle>" and "<description>" and "<balance>"
Then after login close the browser 
     
     Examples:
     |username|password|tittle|description|balace|
     |techfiosdemo@gmail.com|abc123|retirment|saving|10000|