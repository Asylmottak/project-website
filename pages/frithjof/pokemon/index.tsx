import { FC } from "react";

import styles from "@/styles/pages/frithjof/pokemon/Pokemons.module.scss";
import Nav from "@/components/frithjof/Nav";

interface IPokemonsProps {}

/**
 * Pokemons component
 * @return {JSX.Element} - The JSX code for Pokemons component
 */
const Pokemons: FC<IPokemonsProps> = (): JSX.Element => {
  return (
    <div className={styles.pokemons}>
      <Nav />
      <h1>Pokemon</h1>
      <p>Coming soon...</p>
    </div>
  );
};

export default Pokemons;
