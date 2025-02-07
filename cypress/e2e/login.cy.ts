describe('Login testing', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('Login with standard_user, with valid credentials', () => {
    cy.get('input[name="user-name"]').type('standard_user');
    cy.get('input[name="password"').type('secret_sauce');

    cy.get('[data-test="login-button"]').click();

    cy.get('div.app_logo').should('contain.text', 'Swag Labs');
  });

  it('Login with standard_user, with invalid credentials', () => {
    cy.get('input[name="user-name"]').type('standard_user');
    cy.get('input[name="password"').type('wrong_password');

    cy.get('[data-test="login-button"]').click();

    cy.get('div.error-message-container').should('be.visible');
  });

  it('Login with standard_user, with invalid credentials', () => {
    cy.get('input[name="user-name"]').type('standard_user');
    cy.get('input[name="password"').type('wrong_password');

    cy.get('[data-test="login-button"]').click();

    cy.get('div.error-message-container').should('be.visible');
  });

  it('Login with locked_out_user, with valid credentials', () => {
    cy.get('input[name="user-name"]').type('locked_out_user');
    cy.get('input[name="password"').type('secret_sauce');

    cy.get('[data-test="login-button"]').click();

    cy.get('div.error-message-container').should('be.visible');
  });
});
