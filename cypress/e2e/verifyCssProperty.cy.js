import rgbHex from 'rgb-hex';

describe("verify CSS", () => {
  it("verify CSS", () => {
    cy.visit("https://reqres.in/");


    cy.wait(1000)
    cy.contains('Login - unsuccessful').click({force:true});

    cy.get('[data-key="response-code"]')
      .invoke('text')
      .then(errorCode => {
        cy.log("Code::"+errorCode);
      });

    cy.get('[data-key="response-code"]')
      .invoke("css", "color")
      .then((color) => {
        cy.log("Code::"+rgbHex(color));
      });
  });
});
