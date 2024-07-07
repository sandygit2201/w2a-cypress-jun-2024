class ProductsPage{

    searchForProductAddToCart(productName){
        cy.get('#search_product').clear().type(productName)
        cy.get('#submit_search').click()
        cy.get('.add-to-cart').filter(':visible').click()
        cy.contains("Added!").filter(":visible").should('be.visible')
        cy.contains("Continue Shopping").filter(":visible").click()
    }

    searchProductAndGoToProductPage(productName){
        cy.get('#search_product').clear().type(productName)
        cy.get('#submit_search').click()
        cy.contains('View Product').filter(':visible').click()

    }
}

export default new ProductsPage()