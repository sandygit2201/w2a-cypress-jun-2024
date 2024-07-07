class ProductDetailsPage{

    addProductToCart(qty){
        cy.get('#quantity').clear().type(qty)
        cy.get('.cart').click()
        cy.contains("Added!").filter(":visible").should('be.visible')
        cy.contains("Continue Shopping").filter(":visible").click()

    }

}

export default new ProductDetailsPage()