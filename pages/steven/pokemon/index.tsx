import { FC } from "react";

import PokemonList from "@/components/steven/pokemon/PokemonList";
import Navbar from "@/components/steven/Navbar";

interface IPokemonProps {}

/**
 * Pokemon component
 * @return {JSX.Element} - The JSX code for Pokemon component
 */
const Pokemon: FC<IPokemonProps> = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <PokemonList />
    </>
  );
};

export default Pokemon;
