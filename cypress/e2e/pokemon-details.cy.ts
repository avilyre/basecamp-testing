describe("Pokemon Details Page", () => {
  it("Should be able to go to the pokemon details page", () => {
    cy.login();

    cy.intercept("GET", "http://localhost:3000/pokemons/1", {
      fixture: "pokemon-details.json"
    });

    cy.get("h3").contains("Pikachu").click();

    cy.get("h3").contains("Pikachu");
    cy.get("img").should("have.attr", "src", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png")
    cy.get("strong").contains("Electric")
    cy.get("a").contains("Back to dashboard").should("have.attr", "href", "/dashboard");

    cy.visit("http://localhost:5173/dashboard");

    cy.contains("Dashboard");
  })
});