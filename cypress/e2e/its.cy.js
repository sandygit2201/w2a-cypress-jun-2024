describe('its command',()=>{

    it("",()=>{

        // cy.visit("https://docs.cypress.io/api/commands/its")
        // cy.wait(2000)
        // // cy.window().its('location').then((data)=>{

        // //     cy.log(JSON.stringify(data))

        // // })

        // cy.location().then(data=>{
        //     cy.log(JSON.stringify(data))
        // })

        cy.visit("https://the-internet.herokuapp.com/tables")
        let email = "jdoe@hotmail.com"
        getDue(email)
       
    })

    function getDue(email){
        
        cy.contains(email).next().then($ele=>{
            cy.wrap($ele).invoke('text').then(data=>{
                cy.log('data::'+data)
            })
        })
    } 

})