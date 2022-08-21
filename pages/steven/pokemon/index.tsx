import { FC, useRef } from "react";

import PokemonList from "@/components/steven/pokemon/PokemonList";
import Navbar from "@/components/steven/Navbar";
import styles from "@/styles/pages/steven/pokemon/Pokemon.module.scss";

interface IPokemonProps {}

/**
 * Pokemon component
 * @return {JSX.Element} - The JSX code for Pokemon component
 */
const Pokemon: FC<IPokemonProps> = (): JSX.Element => {
  const containerRef = useRef<any>(null);
  return (
    <div className={styles.home}>
      <Navbar />
      <div ref={containerRef} className={styles.container}>
        <PokemonList containerRef={containerRef} />
      </div>
    </div>
  );
};

export default Pokemon;
