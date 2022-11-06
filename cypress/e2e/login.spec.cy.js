describe('login spec', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })
  it("Should successfully login", () => {
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
  });
  
  it("Should not login with empty login", () => {
    cy.contains("Log in").click();
    cy.get("#mail").type(" ");
    cy.get("#pass").type("123");
    cy.contains("Submit").click();
    cy.get("#mail")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
    cy.get("#mail")
      .then(($el) => $el[0].validationMessage)
      .should("contain", "Заполните это поле.");
  });
  
  it("Should not login with empty password", () => {
    cy.contains("Log in").click();
    cy.get("#mail").type("bropet@mail.ru");
    cy.contains("Submit").click();
    cy.get("#pass")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });

  it("Should open the main page", () => {
    cy.contains("Books list");
});
  
})