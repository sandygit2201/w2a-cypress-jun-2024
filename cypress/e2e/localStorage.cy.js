describe('check data with regex',()=>{



    it('check data with regex',()=>{


        cy.visit('/', {
            onBeforeLoad(win) {
              win.sessionStorage.setItem('key', 'value')
            },
          })

        cy.getAllLocalStorage().then(localStorageData=>{

            cy.log(localStorageData)
        })

    })

})