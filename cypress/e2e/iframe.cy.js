describe("handle iframe", () => {
  it.skip("single iframe", () => {
    cy.visit("https://the-internet.herokuapp.com/nested_frames");

    cy.get('[name="frame-bottom"]').then((iframe) => {
      let body = iframe.contents().find("body");

      cy.wrap(body)
        .invoke("text")
        .then((text) => {
          cy.log("Text displayed:: " + text);
        });
    });
  });

  it("nested iframe", () => {
    cy.visit("https://the-internet.herokuapp.com/nested_frames");

    cy.get('[name="frame-top"]').then((iframeTop) => {
     
        iframeTop.find('[name="frameset-middle"]').then(middle=>{

            cy.wrap(middle).contents.body().invoke('text').then(text=>{

                cy.log("TEXT::"+text)
            })
       
        
    });

});
