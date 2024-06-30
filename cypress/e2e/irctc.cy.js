describe('irctc',()=>{

    it("irct",()=>{
        cy.viewport('macbook-16')
        cy.visit("https://www.irctc.co.in/")
        cy.wait(2000)
        cy.contains('[aria-label="Menu Train"]').click().then(()=>{
            cy.contains("IRCTC TRAINS").click().then(()=>{
                cy.contains("Travel Insurance Claim Process").click()
            })
        })
        
        cy.wait(5000)

    })

})