import { render, screen, within } from "@testing-library/react";
import { faker } from "@faker-js/faker";

import { Dashboard } from ".";
import { fetchPokemonList } from "../../services/pokemon-service";
import { act } from "react-dom/test-utils";
import React from "react";

const mockFetchPokemonListFn = vi.fn(fetchPokemonList).mockImplementation(async () => {
  return [
    {
      id: "1",
      name: "bulbasaur",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      type: "grass",
    },
    {
      id: "2",
      name: "ivysaur",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      type: "grass"
    },
    {
      id: "3",
      name: "venusaur",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      type: "grass"
    },
    {
      id: "4",
      name: "random",
      image: faker.image.urlPlaceholder(),
      type: "grass"
    }
  ]
});

type LinkType = {
  to: string;
  children: JSX.Element;
}

describe("Dashboard Page", () => {
  vi.mock("react-router-dom", () => ({
    Link: (props: LinkType) => {
      const { to, children } = props;
      const linkComponent = React.createElement("a", { href: to }, children);
      return linkComponent;
    }
  }));

  beforeEach(async () => {
    await act(async () => { // act is used when we have an update from react in the component Dashboard
      render(<Dashboard fetchPokemonList={mockFetchPokemonListFn} />);
    });
  });

  it("Should be able to render the title", async () => {
    const title = await screen.findByRole("heading", {
      name: "Dashboard",
    });
    expect(title).toBeInTheDocument();
  });

  it("Should be able to render the pokemons list", async () => {
    const list = await screen.findByTestId("pokemons-list");
    const listItems = await within(list).findAllByRole("listitem");
    expect(listItems).toHaveLength(4);
  })
});