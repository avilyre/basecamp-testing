describe("Dashboard Page", () => {
  it("Should be able to visit the Dashboard page", () => {
    cy.login();
    cy.contains("Dashboard");
  });

  it("Should be able to render 3 pokemons", () => {
    cy.login();
    cy.contains("Pikachu");
    cy.contains("Rotom");
    cy.contains("Charmander");
  });

  it("Should be able to click the first one pokemon and go to details page", () => {
    cy.login();

    cy.intercept("GET", "http://localhost:3000/pokemons/1", {
      fixture: "pokemon-details.json"
    });

    cy.get("h3").contains("Pikachu").click();
    cy.get("h3").contains("Pikachu");
  });
})