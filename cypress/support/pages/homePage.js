class HomePage {
  verifyWelcomeMessage(displayName) {
    cy.contains(`Logged in as ${displayName}`).should("be.visible");
  }

  navigateToProductsPage() {
    cy.get('[href="/products"]').click();
  }

  navigateToCartPage() {
    cy.get('[href="/view_cart"]').click();
  }

  navigateToLoginPage(){
    cy.contains("Signup / Login").click();
  }
  

  navigateToPage(page){

    cy.get(`[href="/${page}"]`).click();


  }
}

export default new HomePage();
