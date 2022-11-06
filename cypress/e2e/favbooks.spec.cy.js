const firstBook = {
    title: "Имя ветра",
    description: "Роман в жанре героического фэнтези, написанный американским писателем Патриком Ротфуссом",
    author: "Патрик Ротфусс",
  };
  const secondBook = {
    title: "Немного ненависти",
    description: "Продолжение трилогии «Первый Закон» от мастера саркастичного тёмного фэнтези",
    author: "Джо Аберкромби",
  };
  const thirdBook = {
    title: "Сияние",
    description: "Роман американского писателя Стивена Кинга, написанный в жанрах психологического ужаса и готической литературы",
    author: "Стивен Кинг",
  };

  describe('Favbook spec', () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
      cy.login("bropet@mail.ru", "123");
    });

    it("Should add a new book", () => {
        cy.newBook(firstBook);
        cy.get(".card-title").should("contain.text", firstBook.title);
    });

    it("Should add new favourite book", () => {
        cy.addNewFavoriteBook(secondBook);
        cy.visit("http://localhost:3000/favorites");
        cy.get(".card-title").should("contain.text", secondBook.title);
      });

      it("Should add and delete new favourite book", () => {
        cy.addNewFavoriteBook(thirdBook);
        cy.visit("http://localhost:3000/favorites");
        cy.get(".card-title").should("contain.text", thirdBook.title);
        cy.contains(thirdBook.title).contains("Delete from favorite").click();
        cy.contains("Please add some book to favorit on home page!").should("be.visible");
      });




})