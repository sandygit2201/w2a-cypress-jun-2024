import cartPage from "../../support/pages/cartPage";
import checkoutPage from "../../support/pages/checkoutPage";
import homePage from "../../support/pages/homePage";
import loginPage from "../../support/pages/loginPage";
import productDetailsPage from "../../support/pages/productDetailsPage";
import productsPage from "../../support/pages/productsPage";
describe("tc-15", () => {
  it("tc-15", () => {
    cy.visit("/");

    let totalPurchaseCost = 0;
    cy.viewport("macbook-16");
    homePage.navigateToLoginPage();
    loginPage.LoginAsValidUser();
    homePage.navigateToProductsPage();

    cy.fixture("productsToBuy").then((products) => {
      let productsPurchased = [];
      for (var i = 0; i < products.length; i++) {
        let cost = products[i]["cost"];
        let qty = products[i]["qty"];
        let product = products[i]["product"];
        productsPurchased.push(product);
        totalPurchaseCost = totalPurchaseCost + cost * qty;
        productsPage.searchProductAndGoToProductPage(product);
        productDetailsPage.addProductToCart(qty);
        homePage.navigateToProductsPage();
      }
      homePage.navigateToCartPage();
      cartPage.verifyProductsCountInCartPage(products.length);
      productsPurchased.forEach((product) => {
        cartPage.verifyProductInCart(product);
      });

      cartPage.proceedToCheckout()

      
      cy.fixture('userInfo').then(userData=>{

        let address = {
          "name": userData['firstName'] + ' ' + userData['lastName'],

        }

        checkoutPage.verifyAddress(address)
        

      })

    });
  });
});
