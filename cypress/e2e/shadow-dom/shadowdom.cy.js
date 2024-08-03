describe("Shadow dom example",()=>{

    it("Shadow dom",()=>{

        cy.visit("https://books-pwakit.appspot.com/")

        cy.get("[apptitle='BOOKS']").shadow().find('#input').type("english")

        cy.wait(5000)

    })

})