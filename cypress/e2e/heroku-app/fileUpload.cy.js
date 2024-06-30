describe("file upload",()=>{

    it("upload a file",()=>{

        cy.visit("https://the-internet.herokuapp.com/upload")

        cy.get("#file-upload").selectFile("cypress/e2e/heroku-app/dropdown.cy.js")
        cy.get("#file-submit").click()

    })

})