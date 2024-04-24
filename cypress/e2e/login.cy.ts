describe('Login Page', () => {
  it('Should be able to render the login page', () => {
    cy.login();
    cy.contains("Dashboard")
  });
})