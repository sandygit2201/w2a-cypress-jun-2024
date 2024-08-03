describe("compare ui and api response",()=>{

    it("check api response",()=>{

        cy.request("https://reqres.in/api/users/2").as("userInfo")

        cy.intercept("https://reqres.in/api/users/2").as("@userData")

        cy.visit("https://reqres.in/")
        cy.get("[data-id='users-single']").click()
        cy.wait(2000)

        cy.get("[data-key='output-response']").invoke('text').then(uiData=>{

           cy.get('@userInfo').then(expectedResponse=>{

            cy.log("UIdata::"+uiData)
            cy.log("expected Reponse::"+JSON.stringify(expectedResponse.body))


            expect(JSON.stringify(expectedResponse.body)).to.deep.eq(uiData)

           })

        })

    })


})