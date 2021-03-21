describe('header', () => {
  beforeEach(() => {
    cy.visit('#/notes');
    cy.clearLocalStorage();
  });

  describe('1. Default state', () => {
    it('1.1 The default language of application is english', () => {
      cy.get('app-setting fa-icon').click();
      cy.get('app-language').get('.lang.select').should('have.class', 'en');
    });
  });

  describe('2. Translation', () => {
    it('2.1 When select to russia icon the language should change to russian', () => {
      cy.get('app-setting fa-icon').click();
      cy.get('app-language').get('.lang.ru').click();
      cy.get('app-user')
        .get('.user-details')
        .should('have.text', 'Иванов И.И.');
    });
  });
});
