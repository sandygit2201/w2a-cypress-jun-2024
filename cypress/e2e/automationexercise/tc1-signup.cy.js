const { faker } = require("@faker-js/faker/locale/af_ZA");

describe("signup tests", () => {
  it("create user", () => {

    const newUserInfo = {

        name:faker.person.fullName(),
        email:faker.internet.email(),
        password:faker.internet.password()
    }

    // invoke app
    cy.visit("/");
    // navigate to login page
    cy.contains("Signup / Login").click();

    // register as new user
    cy.contains("New User Signup!").should("be.visible");
    cy.get('[data-qa="signup-name"]').type(newUserInfo.name);
    cy.get('[data-qa="signup-email"]').type(newUserInfo.email);
    cy.get('[data-qa="signup-button"]').click();

    // Fill account info

    cy.contains('Enter Account Information').should('be.visible')

    cy.get('#id_gender2').check()

    cy.get('[data-qa="password"]').type(newUserInfo.password)
    cy.get('[data-qa="days"]').select('10')
    cy.get('[data-qa="months"]').select('10')

    cy.get('[data-qa="years"]').select('2012')

    cy.get('#newsletter').check()

  });
});
