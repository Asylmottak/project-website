import { FC } from "react";

import PokemonList from "@/components/steven/pokemon/PokemonList";

interface IPokemonProps {}

/**
 * Pokemon component
 * @return {JSX.Element} - The JSX code for Pokemon component
 */
const Pokemon: FC<IPokemonProps> = (): JSX.Element => {
  return <PokemonList />;
};

export default Pokemon;
