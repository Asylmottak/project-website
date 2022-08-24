import { useRef } from "react";

import Navbar from "@/components/steven/Navbar";

import styles from "@/styles/pages/steven/css-training/CSS.module.scss";
import PokemonList from "@/components/steven/pokemon/PokemonList";
import Carousel from "@/components/steven/pokemon/Carousel";
import DragAndDrop from "@/components/steven/DragAndDrop";
import usePokemon from "hooks/usePokemon";
import FadeInCard from "@/components/cards/FadeInCard";
import HoverCard from "@/components/cards/HoverCard";
import PokeData from "@/components/steven/pokemon/PokemonData";

/**
 * Index component
 * @return {JSX.Element} - The JSX code for Index component
 */
const Index = (): JSX.Element => {
  const pokemonRef = useRef<any>(null);
  const containerRef = useRef<any>(null);
  const [pokemon, loading, setLoading] = usePokemon(10);

  return (
    <div className={styles.home}>
      <Navbar />
      <ul className={styles.container}>
        <li
          className={`${styles.item__dragdrop} ${styles.item}`}
          ref={containerRef}
        >
          <DragAndDrop newStyles={styles}>
            {pokemon.slice(0, 8).map((pokemon) => (
              <FadeInCard key={pokemon.id} containerRef={containerRef}>
                <HoverCard width={300} height={340}>
                  <PokeData pokemon={pokemon} />
                </HoverCard>
              </FadeInCard>
            ))}
          </DragAndDrop>
        </li>
        <li className={`${styles.item__item__carousel} ${styles.item}`}>
          <Carousel
            newStyles={styles}
            loading={loading}
            setLoading={setLoading}
          >
            {pokemon.map((pokemon) => (
              <PokeData pokemon={pokemon} key={pokemon.id} />
            ))}
          </Carousel>
        </li>
        <li
          className={`${styles.item__pokemon} ${styles.item}`}
          ref={pokemonRef}
        >
          <PokemonList containerRef={pokemonRef} newStyles={styles} />
        </li>
      </ul>
    </div>
  );
};

export default Index;
