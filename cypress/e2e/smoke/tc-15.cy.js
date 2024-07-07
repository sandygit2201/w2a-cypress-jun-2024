import cartPage from "../../support/pages/cartPage";
import homePage from "../../support/pages/homePage";
import loginPage from "../../support/pages/loginPage";
import productsPage from "../../support/pages/productsPage";
import { faker } from "@faker-js/faker/locale/us";
describe("tc-15", () => {

  it("tc-15", () => {

    const newUserInfo = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      company: faker.company.buzzNoun(),
      address1: faker.location.street(),
      address2: faker.location.streetAddress(),
      // country:faker.location.country,
      state: faker.location.state(),
      city: faker.location.city(),
      zipCode: faker.location.zipCode(),
      mobile: faker.phone.number(),
    };

    cy.writeFile('cypress/fixtures/userInfo.json',newUserInfo)

    cy.visit("/");
    cy.viewport('macbook-16')
    // homePage.navigateToLoginPage()
    // loginPage.LoginAsValidUser();
    // homePage.navigateToProductsPage();

    // let productsToBuy = ['Winter Top','Summer White Top']

    // productsToBuy.forEach(product=>{
    //     productsPage.searchForProductAddToCart(product)
    // })

    // homePage.navigateToCartPage()
    // cartPage.verifyProductsCountInCartPage(productsToBuy.length)
    // cartPage.verifyProductInCart(productsToBuy)

    

    
  });
});
