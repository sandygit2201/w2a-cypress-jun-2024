describe('handle ddl',()=>{

    it('select skills',()=>{

        cy.visit('https://demo.automationtesting.in/Register.html')

        cy.get('#Skills').should('have.value','Select Skills')

        cy.get('#Skills').select('Client Server')

    })

})