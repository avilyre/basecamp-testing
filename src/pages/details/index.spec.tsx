import { act, render, screen, within } from "@testing-library/react";
import { Details } from ".";
import { fetchPokemonDetails } from "../../services/pokemon-service";
import React from "react";

type LinkType = {
  to: string;
  children: JSX.Element;
}

const mockFetchPokemonDetailsFn = vi.fn(fetchPokemonDetails).mockImplementation(async () => {
  return {
    id: "1",
    name: "bulbasaur",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    type: "grass",
  };
});

describe("Details Page", () => {
  vi.mock("react-router-dom", () => ({
    Link: (props: LinkType) => {
      const { to, children } = props;
      const linkComponent = React.createElement("a", { href: to }, children);
      return linkComponent;
    },
    useParams: () => {
      return { id: "1" };
    }
  }));

  beforeEach(async () => {
    await act(async () => {
      render(<Details fetchPokemonDetails={mockFetchPokemonDetailsFn} />);
    })
  })

  it("Should be able to render the title", async () => {
    const pokemonInfoContainer = await screen.findByTestId("pokemon-details-container");

    const title = await within(pokemonInfoContainer).findByRole("heading", {
      name: "bulbasaur",
    });
    expect(title).toBeInTheDocument();
  });

  it("Shoul be able to render the type", async () => {
    const pokemonInfoContainer = await screen.findByTestId("pokemon-details-container");

    const type = await within(pokemonInfoContainer).findByText("grass");
    expect(type).toBeInTheDocument();
  });

  it("Should be able to render the image", async () => {
    const image = await screen.findByAltText("bulbasaur");
    expect(image).toBeInTheDocument();
  });

  it("Should be able to render a go back link", async () => {
    const goBackLink = await screen.findByRole("link", {
      name: "Back to dashboard",
    });
    expect(goBackLink).toBeInTheDocument();
    expect(goBackLink).toHaveAttribute("href", "/dashboard");
  })
});