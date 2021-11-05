import React from "react";
import { Pokemon } from "@/types/steven/pokemon/pokemonInterfaces";
import { capitalizeFirstLetter } from "@/utils/steven/pokemon/pokemonUtils";

import Ability from "./Ability";
import Stat from "./Stat";

import styles from "@/styles/components/steven/pokemon/Card.module.css";

interface Props {
  pokemon: Pokemon;
}

const PokeData: React.FunctionComponent<Props> = ({ pokemon }) => {
  return (
    <>
      <div className={styles.cardImage}>
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={`${pokemon.name} illustration`}
          />
        }
      </div>
      <div className={styles.cardTitle}>
        <span className={styles.cardTypes}>
          {pokemon.types.map(({ type }, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`/steven/pokemon/assets/pokemonTypes/${type.name}.png`}
              alt={type.name}
              key={index}
            />
          ))}
        </span>
        <h1>{capitalizeFirstLetter(pokemon.name)}</h1>
        <p>{pokemon.stats[0]["base_stat"]}HP</p>
      </div>
      <div className={styles.cardText}>
        <div className={styles.abilities}>
          {pokemon.abilities.slice(0, 1).map(({ ability }, index) => (
            <Ability url={ability.url} key={index} />
          ))}
        </div>
        <div className={styles.stats}>
          {pokemon.stats.slice(1, 5).map((stat, index) => (
            <Stat stat={stat} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};
export default PokeData;
