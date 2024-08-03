describe('custom command test',()=>{

    const baseURL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
   
    beforeEach('login before each test',()=>{
        cy.loginAndSaveSession('Admin','admin123')
        cy.visit(baseURL)
    })

    it('verify for time at work',()=>{
        cy.visit(baseURL)
        cy.contains('Buzz Latest Posts').should('be.visible')
    })

    it('Employees on Leave Today',()=>{
        cy.visit(baseURL)
        cy.contains('Employee Distribution by Sub Unit').should('be.visible')
        cy.logout()
    })


    it('Employees on Leave Today',()=>{
        cy.visit(baseURL)
        cy.contains('Employee Distribution by Sub Unit').should('be.visible')
    })

    it('Employees on Leave Today',()=>{
        cy.visit(baseURL)
        cy.contains('Employee Distribution by Sub Unit').should('be.visible')
    })
    
})