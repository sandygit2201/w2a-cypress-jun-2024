describe("Diff between request and intercept", () => {
  it.skip("request", () => {
    cy.request("https://reqres.in/api/users/2").as("userInfo");

    cy.get("@userInfo").then((response) => {
      cy.log(JSON.stringify(response));
    });
  });

  it("intercept", () => {

    cy.intercept('GET', '**/users').as("userInfo");
    
    cy.visit("https://reqres.in/")  
    cy.wait('@userInfo')
    cy.get("@userInfo").then((response) => {
      cy.log(JSON.stringify(response));
    });
  });
});
