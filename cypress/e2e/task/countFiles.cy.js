describe("Count number of files in folder",()=>{

    it("Get file count",()=>{

        cy.task('countFiles','cypress/downloads11').then(count=>{
            cy.log("Files ::"+count)
        })

    })

})