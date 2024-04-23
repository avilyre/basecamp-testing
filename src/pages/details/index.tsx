import "./index.styles.scss";

import { Fragment, useCallback, useEffect, useState } from "react";

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

  const [isPokemonError, setIsPokemonError] = useState(false);
  const [pokemon, setPokemon] = useState<PokemonType>({} as PokemonType);

  const { id } = useParams<Params>();

  const fetchDetails = useCallback(async () => {
    try {
      const data = await fetchPokemonDetails(id!);
      setPokemon(data);
    } catch (error) {
      setIsPokemonError(true);
    }
  }, [fetchPokemonDetails, id]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  if (isPokemonError) {
    return (
      <Fragment>
        <h3>Pokemon Not Found</h3>
        <Link to="/dashboard">Back to dashboard</Link>
      </Fragment>
    );
  }

  return (
    <div data-testid="pokemon-details-container" className="pokemon-details-container">
      <h3>{pokemon.name}</h3>
      <img src={pokemon.image} alt="bulbasaur" />
      <strong>{pokemon.type}</strong>
      <Link to="/dashboard">Back to dashboard</Link>
    </div>
  );
}