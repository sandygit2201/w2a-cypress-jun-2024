
describe("fixture-file upload", () => {
  it("fixture example ", () => {
    cy.visit("contact_us");
    cy.fixture("contactUS").then((userData) => {
      let contactUsDetails = userData.contactUsInfo[0];

      cy.fillContactUsForm(contactUsDetails)
    });
  });
});
