describe('Login Page', () => {
  it('Should be able to render the login page', () => {
    cy.visit('http://localhost:5173/');
    cy.contains("Basecamp");
    cy.contains("Sign In");
  });
})