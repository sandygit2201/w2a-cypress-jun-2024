class CheckOutPage{

    verifyAddress(address){

        cy.get('.address_firstname').invoke('text').should('be',address.name)
        cy.get('.address_firstname').invoke('text').should('be',address.name)

    }

}

export default new CheckOutPage()