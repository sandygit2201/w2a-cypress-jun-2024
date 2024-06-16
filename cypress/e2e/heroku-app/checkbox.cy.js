describe("handle checkbox", () => {
  it("check first checkbox", () => {
    cy.visit("https://the-internet.herokuapp.com/checkboxes");

    cy.contains("Checkboxes").should("be.visible");

    cy.get("#checkboxes input").first().should("not.be.checked");
    cy.get("#checkboxes input").first().check();
    cy.get("#checkboxes input").first().should("be.checked");
    cy.wait(10000);
  });
});
