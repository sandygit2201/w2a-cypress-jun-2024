import homePage from "../../support/pages/homePage";
import loginPage from "../../support/pages/loginPage";
import productsPage from "../../support/pages/productsPage";
describe("tc-15", () => {
  it("tc-15", () => {
    cy.visit("/");
    homePage.navigateToLoginPage()
    loginPage.LoginAsValidUser();
    homePage.navigateToProductsPage();

    productsPage.searchForProductAddToCart('WinterTop')
    productsPage.searchForProductAddToCart('Summer white top')
    
  });
});
