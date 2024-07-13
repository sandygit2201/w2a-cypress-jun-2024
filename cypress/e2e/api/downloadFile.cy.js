describe("download image file",()=>{

    it.skip("file download from UI",()=>{

        cy.visit("https://the-internet.herokuapp.com/download")
        cy.contains("snickers2.jpg")

    })

    it("download file using api",()=>{

        // cy.request({url:"https://the-internet.herokuapp.com/download/snickers2.jpg",
        // encoding: 'base64'}).then((response) => {
        //     cy.writeFile('fixtures/filedownload/snikers2.jpg', response.body, 'base64')
        //   })

        cy.request({
            url: 'https://the-internet.herokuapp.com/download/snickers2.jpg',
            encoding: 'base64',
          }).then((response) => {
            const base64Content = response.body
            const mime = response.headers['content-type'] // or 'image/png'
            // see https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
            const imageDataUrl = `data:${mime};base64,${base64Content}`
            cy.writeFile('fixtures/filedownload/snikers2.jpg', base64Content)
          })

    })

})