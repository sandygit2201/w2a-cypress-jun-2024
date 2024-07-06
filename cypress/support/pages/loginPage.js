import "dotenv/config";
import homePage from "./homePage";


class LoginPage {
    // Fill in login form and submit
  fillLoginForm(loginDetails) {
    if (loginDetails.hasOwnProperty("userName"))
      cy.get('[data-qa="login-email"]').type(loginDetails.userName);
    if (loginDetails.hasOwnProperty("password"))
      cy.get('[data-qa="login-password"]').type(loginDetails.password);

    cy.get("[data-qa='login-button']").click();

  }

//   Login as valid user and verify welcome message in homepage
  LoginAsValidUser() {
    let loginDetails = {
      userName: Cypress.env('userName'),
      password: Cypress.env('password'),
    };

    this.fillLoginForm(loginDetails);
    
    homePage.verifyWelcomeMessage(Cypress.env('displayName'))
  }
}

export default new LoginPage()
