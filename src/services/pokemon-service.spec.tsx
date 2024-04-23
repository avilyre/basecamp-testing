import { faker } from "@faker-js/faker";
import { PokemonType } from "../@types/pokemon";
import { fetchPokemonDetails, fetchPokemonList } from "./pokemon-service";

vi.stubGlobal("fetch", vi.fn(() => new Promise(resolve => resolve({} as Response))));
// or globalThis.fetch = vi.fn();

type CreateFetchResponseTypes = {
  json: () => Promise<unknown>
}

const createFetchResponse = (data: unknown): CreateFetchResponseTypes => {
  const response = {
    json: () => new Promise(resolve => resolve(data))
  }

  return response;
}

describe(("Pokemon Service"), () => {
  it("Should be able to fetch to the correct url", async () => {
    const pokemonListResponse: PokemonType[] = [
      {
        id: "1",
        image: faker.image.urlPlaceholder(),
        name: faker.animal.bird.name,
        type: faker.animal.type.name
      },
      {
        id: "2",
        image: faker.image.urlPlaceholder(),
        name: faker.animal.bird.name,
        type: faker.animal.type.name
      }
    ];

    
    vi.mocked(fetch).mockResolvedValue(createFetchResponse(pokemonListResponse) as Response);
    // or, but with type error fetch.mockResolvedValue(createFetchResponse(pokemonListResponse));

    const pokemonList = await fetchPokemonList();

    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/pokemons");
    expect(pokemonList).toStrictEqual(pokemonListResponse);
  })

  it("Should be able to get the pokemon details", async () => {
    const pokemonDetailsResponse: PokemonType = {
      id: "1",
      image: faker.image.urlPlaceholder(),
      name: faker.animal.bird.name,
      type: faker.animal.type.name
    };

    vi.mocked(fetch).mockResolvedValue(createFetchResponse(pokemonDetailsResponse) as Response);
    // or, but with type error fetch.mockResolvedValue(createFetchResponse(pokemonListResponse));


    const pokemonDetails = await fetchPokemonDetails("1");

    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/pokemons/1");
    expect(pokemonDetails).toStrictEqual(pokemonDetailsResponse);
  })
});