Cypress.Commands.add("fillContactUsForm",(formData)=>{

    cy.get('[data-qa="name"]').type(formData.name);
      cy.get('[data-qa="email"]').type(formData.email);
      cy.get('[data-qa="subject"]').type(formData.subject);
      cy.get('[data-qa="message"]').type(formData.message);

      cy.get('[name="upload_file"]').selectFile({
        contents: formData.filePath,
        fileName: "randomscreenshot.png",
      });

})


Cypress.Commands.add('loginAndSaveSession', (user, pwd) => {
  cy.session([user, pwd], () => {
    cy.visit('/')
    cy.get('input[name="username"]').type(user)
    cy.get('input[name="password"]').type(pwd)
    cy.get('button[type="submit"]').click()
    cy.contains('Time at Work').should('be.visible')
  })
})
