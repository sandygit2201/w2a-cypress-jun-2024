
import loginPage from "../../support/pages/loginPage";


describe("Login page tests", () => {
  // invoke baseURL and navigate to login page
  beforeEach('open url and navigate to login page',()=>{
    cy.visit('/')
    cy.contains("Signup / Login").click();
  })

  // verify valid user scenario
  it("Login as valid user", () => {
    loginPage.LoginAsValidUser();
  });

  // verify invalid user scenario
  it("login with invalid credentials", () => {
    // Login error message should be displayed
    let loginDetails = {
      userName: "w2a144331@gmail.com",
      password: "abcd1234",
    };
    loginPage.fillLoginForm(loginDetails);
    cy.contains("Your email or password is incorrect!").should("be.visible");
  });


  it.only("login without entering password", () => {
    // should display to fill password field

    let loginDetails = {
      userName: "w2a144331@gmail.com",
    };
    loginPage.fillLoginForm(loginDetails);
    cy.contains("Please fill in this field.").should("be.visible");
  });

  it("Login without username", () => {
    // should display to fill username field
  });
});
