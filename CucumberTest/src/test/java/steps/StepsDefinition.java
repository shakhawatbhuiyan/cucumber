package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.LoginClass;
import util.BrowserFactory;

public class StepsDefinition {
	WebDriver driver = BrowserFactory.startBrowser();
	
	
	
	@Given("^user already in login page$")
	public void user_already_in_login_page() throws Throwable {
		String actualTittle = driver.getTitle();
		System.out.println(actualTittle);
		//String expectedTittle = "Login - Techfios Test Application - billing";
		//Assert.assertEquals(expectedTittle,actualTitle);
	  
	}

	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password) throws Throwable {
	  LoginClass logintechfios = PageFactory.initElements(driver,LoginClass.class); 
	  logintechfios.login(username, password);
	}

	@Then("^after login close the browser$")
	public void after_login_close_the_browser() throws Throwable {
	   
	}


}
