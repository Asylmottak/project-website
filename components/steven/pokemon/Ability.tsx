import React, { useState, useEffect } from "react";
import { getAbilityFromApi } from "@/utils/steven/pokemon/pokemonAPI";
import { capitalizeFirstLetter } from "@/utils/steven/pokemon/pokemonUtils";

import styles from "@/styles/components/steven/pokemon/Ability.module.css";

interface IAbility {
  name: string;
  effect_entries: {
    short_effect: string;
  }[];
}

const Ability = ({ url }: any) => {
  const [ability, setAbility] = useState<IAbility>();

  useEffect(() => {
    const getAbility = async () => {
      const response = await getAbilityFromApi(url);
      setAbility(response);
    };
    getAbility();
  }, [url]);

  return (
    <div className={styles.ability}>
      <h1>{ability && capitalizeFirstLetter(ability.name)}</h1>
      <hr />
      <p>{ability && ability["effect_entries"][1]["short_effect"]}</p>
    </div>
  );
};
export default Ability;
