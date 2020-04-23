Feature: client should be able to login
         
Scenario Outline: clien should be able to login with credentials 
      
Given user already in login page 
When user enters "<username>" and "<password>" 
Then after login close the browser 
     
 Examples:
     |username|password|
     |techfiosdemo@gmail.com|abc123|