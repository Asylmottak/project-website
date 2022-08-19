import { useEffect, useState, FC } from "react";
import { Pokemon } from "@/types/steven/pokemon/pokemonInterfaces";
import { getPokemonFromApi } from "@/utils/steven/pokemon/pokemonAPI";

import PokeData from "./PokemonData";
import Loading from "react-loader-spinner";
import HoverCard from "@/components/cards/HoverCard";
import List from "../../List";

import homeStyles from "@/styles/pages/steven/pokemon/Pokemon.module.scss";
import FadeInCard from "@/components/cards/FadeInCard";

const getScrollPosition = (ref: React.MutableRefObject<any>) => {
  const container = ref?.current;
  return (
    container?.scrollHeight - container?.scrollTop - container?.offsetHeight
  );
};

interface IPokemonListProps {
  containerRef: React.MutableRefObject<any>;
}
const PokemonList: FC<IPokemonListProps> = ({ containerRef }) => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [next, setNext] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  );

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const container = containerRef?.current;
    const handleScroll = () => {
      setLoading(getScrollPosition(containerRef) < container.clientHeight);
    };
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setLoading(getScrollPosition(containerRef) == 0);
    };

    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    setLoading(getScrollPosition(containerRef) == 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemon]);

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

  return (
    <div className={homeStyles.home}>
      <List gap={200}>
        {pokemon.map((pokemon) => (
          <FadeInCard key={pokemon.id} containerRef={containerRef}>
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
