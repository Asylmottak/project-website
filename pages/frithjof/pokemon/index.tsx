import { FC } from "react";

import styles from "@/styles/pages/frithjof/pokemon/Pokemons.module.scss";

interface IPokemonsProps {}

/**
 * Pokemons component
 * @return {JSX.Element} - The JSX code for Pokemons component
 */
const Pokemons: FC<IPokemonsProps> = (): JSX.Element => {
  return <div className={styles.pokemons}>Pokemons</div>;
};

export default Pokemons;
