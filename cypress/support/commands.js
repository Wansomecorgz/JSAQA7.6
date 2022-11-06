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
Cypress.Commands.add("login", (login, password) => {
    cy.contains("Log in").click();
    cy.get("#mail").type(login);
    cy.get("#pass").type(password);
    cy.contains("Submit").click();
  });

  Cypress.Commands.add("newBook", (book) => {
    cy.contains("Add new").click();
    cy.contains("Book description");
    cy.get("#title").type(book.title);
    cy.get("#description").type(book.description);
    cy.get("#authors").type(book.author);
    cy.contains("Submit").click();
  })

    Cypress.Commands.add("addNewFavoriteBook", (book) => {
        cy.contains("Add new").click();
        cy.contains("Book description");
        cy.get("#title").type(book.title);
        cy.get("#description").type(book.description);
        cy.get("#authors").type(book.author);
        cy.get("#favorite").click();
        cy.contains("Submit").click();
      })
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