import { useRef } from "react";

import Navbar from "@/components/steven/Navbar";

import styles from "@/styles/pages/steven/css-training/CSS.module.scss";
import PokemonList from "@/components/steven/pokemon/PokemonList";
import PokemonCarousel from "@/components/steven/pokemon/PokemonCarousel";

/**
 * Index component
 * @return {JSX.Element} - The JSX code for Index component
 */
const Index = (): JSX.Element => {
  const pokemonRef = useRef<any>(null);

  return (
    <div className={styles.home}>
      <Navbar />
      <ul className={styles.container}>
        <li className={`${styles.item__carousel} ${styles.item}`}>
          <PokemonCarousel />
        </li>
        <li
          className={`${styles.item__pokemon} ${styles.item}`}
          ref={pokemonRef}
        >
          <PokemonList containerRef={pokemonRef} />
        </li>
      </ul>
    </div>
  );
};

export default Index;
