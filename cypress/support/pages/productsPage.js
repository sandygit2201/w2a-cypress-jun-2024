class ProductsPage{

    searchForProductAddToCart(productName){

        cy.get('#search_product').type(productName)
        cy.get('#submit_search').click()
        cy.contains('Add to cart').filter(':visible').click()
    }

}

export default new ProductsPage()