class CartPage{

    verifyProductsCountInCartPage(productCount){
        cy.get("#cart_info_table tbody tr").should('have.length', productCount)
    }
    verifyProductInCart(productsToBuy){
        cy.get('#cart_info_table tbody tr .cart_description a').each(ele=>{
            cy.wrap(ele).invoke('text').then(product=>{
                expect(productsToBuy.includes(product)).to.be.true
                
            })
    
        })
    }

    proceedToCheckout(){
        cy.get('.check_out').click()
    }

}

export default new CartPage()