describe('Meine erste Test-Suite', () => {
    it('Besucht die Startseite und überprüft den Titel', () => {
      cy.visit('/');
      cy.contains('Willkommen').should('be.visible');
    });
  });
  