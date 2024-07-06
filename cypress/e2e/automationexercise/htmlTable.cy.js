describe("lsfas", () => {
  it("test3", () => {
    cy.visit("https://the-internet.herokuapp.com/tables");

    let userEmail = "jdoe@hotmail.com"

    cy.get("#table1 tbody tr").each((row) => {
      cy.wrap(row)
        .find("td[]")
        .each((cellEle) => {
          cy.wrap(cellEle)
            .invoke("text")
            .then((cellData) => {
              if(cellData == userEmail){
                cy.wrap(row).find('td').each(cellEle=>{
                    cy.wrap(cellEle).invoke('text').then(cellData=>{
                        cy.log("cellData::"+cellData)
                    })
                })
                
              }
            });
        });
    });
  });
});
