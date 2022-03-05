import { useEffect, useState } from "react";
import { Pokemon } from "@/types/steven/pokemon/pokemonInterfaces";
import { getPokemonFromApi } from "@/utils/steven/pokemon/pokemonAPI";
import { checkContentFillWindow } from "@/utils/steven/pokemon/pokemonUtils";

import PokeData from "./PokemonData";
import Loading from "react-loader-spinner";
import HoverCard from "@/components/cards/HoverCard";
import List from "../../List";

import homeStyles from "@/styles/pages/steven/pokemon/Home.module.scss";
import FadeInCard from "@/components/cards/FadeInCard";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [next, setNext] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  );

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop! <
        document.documentElement.offsetHeight - 1
      )
        return;
      setLoading(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      setPokemon((oldData) => [...oldData, ...pokemonData]);
      setLoading(checkContentFillWindow());
    };
    next && loading && getPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemon, loading]);

  return (
    <div className={homeStyles.home}>
      <List gap={200}>
        {pokemon.map((pokemon) => (
          <FadeInCard key={pokemon.id}>
            <HoverCard width={300} height={340}>
              <PokeData pokemon={pokemon} />
            </HoverCard>
          </FadeInCard>
        ))}
      </List>
      <div style={{ marginBottom: "200px" }}>
        {loading && (
          <Loading
            type="ThreeDots"
            color="#273336"
            secondaryColor="#00ff80"
            height={50}
            width={100}
          />
        )}
      </div>
    </div>
  );
};

export default PokemonList;
