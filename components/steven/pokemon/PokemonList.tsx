import { useEffect, FC } from "react";

import PokeData from "./PokemonData";
import Loading from "react-loader-spinner";
import HoverCard from "@/components/cards/HoverCard";

import styles from "@/styles/pages/steven/pokemon/Pokemon.module.scss";
import cn from "classnames";
import FadeInCard from "@/components/cards/FadeInCard";
import usePokemon from "hooks/usePokemon";

const getScrollPosition = (ref: React.MutableRefObject<any>) => {
  const container = ref?.current;
  return (
    container?.scrollHeight - container?.scrollTop - container?.offsetHeight
  );
};

interface IPokemonListProps {
  containerRef: React.MutableRefObject<any>;
  color?: string;
  newStyles?: { [key: string]: string };
}
const PokemonList: FC<IPokemonListProps> = ({
  containerRef,
  color,
  newStyles,
}) => {
  const [pokemon, loading, setLoading] = usePokemon();

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

  return (
    <div className={styles.home} style={{ background: color }}>
      <div
        className={cn({
          [newStyles?.list || ""]: newStyles?.list,
          [styles.list]: !newStyles?.list,
        })}
      >
        {pokemon.map((pokemon) => (
          <FadeInCard key={pokemon.id} containerRef={containerRef}>
            <HoverCard width={300} height={340}>
              <PokeData pokemon={pokemon} />
            </HoverCard>
          </FadeInCard>
        ))}
      </div>
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
