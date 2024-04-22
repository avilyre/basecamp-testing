import "./index.styles.scss";

import { useCallback, useEffect, useState } from "react";

import { PokemonType } from "../../@types/pokemon";
import { Link, useParams } from "react-router-dom";

type Params = {
  id: string;
}

interface IProps {
  fetchPokemonDetails: (id: string) => Promise<PokemonType>;
}

export const Details = (props: IProps) => {
  const { fetchPokemonDetails } = props;

  const [pokemon, setPokemon] = useState<PokemonType>({} as PokemonType);

  const { id } = useParams<Params>();

  const fetchDetails = useCallback(async () => {
    const data = await fetchPokemonDetails(id!);
    setPokemon(data);
  }, [fetchPokemonDetails, id]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  return (
    <div data-testid="pokemon-details-container" className="pokemon-details-container">
      <h3>{pokemon.name}</h3>
      <img src={pokemon.image} alt="bulbasaur" />
      <strong>{pokemon.type}</strong>
      <Link to="/dashboard">Back to dashboard</Link>
    </div>
  );
}