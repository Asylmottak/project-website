import { useState, useEffect, useCallback } from "react";
import { getPokemonFromApi } from "@/utils/steven/pokemon/pokemonAPI";
import { Pokemon } from "@/types/steven/pokemon/pokemonInterfaces";

const usePokemon = (
  limit: number = 10
): [pokemon: Pokemon[], loading: boolean, setLoading: (i: boolean) => void] => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [next, setNext] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`
  );
  const [loading, setLoadingValue] = useState(true);

  const setLoading = useCallback((i) => {
    setLoadingValue(i);
  }, []);

  useEffect(() => {
    const getPokemon = async () => {
      let pokemonData = await getPokemonFromApi(next);
      setNext(pokemonData.next);
      pokemonData = await Promise.all(
        pokemonData.results.map((pokemon: any) =>
          getPokemonFromApi(pokemon.url)
        )
      );
      setLoading(false);
      setPokemon((oldData) => [...oldData, ...pokemonData]);
    };
    next && loading && getPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return [pokemon, loading, setLoading];
};

export default usePokemon;
