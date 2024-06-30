// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Cypress.Commands.add("fillContactUsForm",(formData)=>{

//     cy.get('[data-qa="name"]').type(formData.name);
//       cy.get('[data-qa="email"]').type(formData.email);
//       cy.get('[data-qa="subject"]').type(formData.subject);
//       cy.get('[data-qa="message"]').type(formData.message);

//       cy.get('[name="upload_file"]').selectFile({
//         contents: formData.filePath,
//         fileName: "randomscreenshot.png",
//       });

// })