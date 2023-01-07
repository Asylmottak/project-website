import { useState, useEffect } from "react";
import { getAbilityFromApi } from "@/utils/steven/pokemon/pokemonAPI";

interface IAbility {
  name: string;
  effect_entries: {
    short_effect: string;
  }[];
}

const usePokemonAbility = (url: string) => {
  const [ability, setAbility] = useState<IAbility>();

  useEffect(() => {
    const getAbility = async () => {
      const response = await getAbilityFromApi(url);
      setAbility(response);
    };
    getAbility();
  }, [url]);

  return ability;
};
export default usePokemonAbility;
