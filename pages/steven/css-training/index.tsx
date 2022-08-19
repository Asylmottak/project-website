import { useRef } from "react";

import Navbar from "@/components/steven/Navbar";

import styles from "@/styles/pages/steven/css-training/CSS.module.scss";
import PokemonList from "@/components/steven/pokemon/PokemonList";

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
        <li className={styles.item__pokemon} ref={pokemonRef}>
          <PokemonList containerRef={pokemonRef} />
        </li>
      </ul>
    </div>
  );
};

export default Index;
