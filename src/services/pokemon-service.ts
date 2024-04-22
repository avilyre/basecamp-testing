import { PokemonType } from "../@types/pokemon";

const BASE_URL = "http://localhost:3000";

export const fetchPokemonList = async (): Promise<PokemonType[]> => {
  const response = await fetch(`${BASE_URL}/pokemons`);
  const data = await response.json();
  return data;
}

export const fetchPokemonDetails = async (id: string): Promise<PokemonType> => {
  const response = await fetch(`${BASE_URL}/pokemons/${id}`);
  const data = response.json();
  return data;
}