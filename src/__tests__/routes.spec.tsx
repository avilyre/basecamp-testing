import { render, screen } from "@testing-library/react";
import { RouteObject, RouterProvider, createMemoryRouter } from "react-router-dom";

import { routesConfig } from "../router";
import { fetchPokemonDetails, fetchPokemonList } from "../services/pokemon-service";
import { faker } from "@faker-js/faker";

const createRouter = (routesConfig: RouteObject[], initialEntries: string[]) => {
  const routerConfig = createMemoryRouter(routesConfig, {
    initialEntries
  });
  return routerConfig;
}

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

const mockFetchPokemonDetailsFn = vi.fn(fetchPokemonDetails).mockImplementation(async () => {
  return {
    id: "1",
    name: "bulbasaur",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    type: "grass"
  }
});

describe("Router", () => {
  it("Should be able to render the Login page", async () => {
    const router = createRouter(routesConfig(), ["/"]);

    render(<RouterProvider router={router} />);

    const title = await screen.findByRole("heading", {
      name: "Basecamp",
      level: 2
    });
    expect(title).toBeInTheDocument();
  });

  it("Should be able to render the Sign Up page", async () => {
    const router = createRouter(routesConfig(), ["/sign-up"]);

    render(<RouterProvider router={router} />);

    const title = await screen.findByRole("heading", {
      name: "Sign Up",
      level: 2
    });
    expect(title).toBeInTheDocument();
  });

  it("Should be able to render the Dashboard page", async () => {
    const router = createRouter(routesConfig({
      dependenciesInjection: {
        dashboard: {
          fetchPokemonList: mockFetchPokemonListFn
        }
      }
    }), ["/dashboard"]);

    render(<RouterProvider router={router} />);

    const title = await screen.findByRole("heading", {
      name: "Dashboard",
      level: 1
    });
    expect(title).toBeInTheDocument();
  });

  it("Should be able to render the Not Found page", async () => {
    const router = createRouter(routesConfig(), ["/some-path"]);

    render(<RouterProvider router={router} />);

    const title = await screen.findByRole("heading", {
      name: "404 Not Found",
      level: 1
    });
    expect(title).toBeInTheDocument();
  });

  it("Should be able to render the Pokemon details page", async () => {
    const router = createRouter(routesConfig({
      dependenciesInjection: {
        details: {
          fetchPokemonDetails: mockFetchPokemonDetailsFn
        }
      }
    }), ["/details/1"]);

    render(<RouterProvider router={router} />);

    const title = await screen.findByRole("heading", {
      name: "bulbasaur",
    });
    expect(title).toBeInTheDocument();
  });
});