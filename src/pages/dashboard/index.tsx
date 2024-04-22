import "./index.styles.scss";

import { useCallback, useEffect, useState } from "react";

import { PokemonType } from "../../@types/pokemon";
import { Link } from "react-router-dom";

interface IProps {
  fetchPokemonList: () => Promise<PokemonType[]>;
}

export const Dashboard = (props: IProps) => {
  const { fetchPokemonList } = props;

  const [pokemons, setPokemons] = useState<PokemonType[]>([]);

  const fetchPokemons = useCallback(async () => {
    const data = await fetchPokemonList();
    setPokemons(data);
  }, [fetchPokemonList]);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return (
    <div className="pokemons-container">
      <h1>Dashboard</h1>

      <hr />

      <ul data-testid="pokemons-list" className="pokemons-list">
        {pokemons.map(pokemon => (
          <li key={pokemon.id}>
            <Link to={`/details/${pokemon.id}`}>
              <img src={pokemon.image} alt={pokemon.name} />
              <strong>{pokemon.type}</strong>
              <h3>{pokemon.name}</h3>
            </Link>
          </li>))}
      </ul>
    </div>
  );
}