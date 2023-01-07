import { Pokemon } from "@/types/steven/pokemon/pokemonInterfaces";
import { capitalizeFirstLetter } from "@/utils/steven/pokemon/pokemonUtils";
import { FC } from "react";

import HoverCard from "@/components/cards/HoverCard";
import usePokemonAbility from "./usePokemonAbility";

import styles from "@/styles/components/steven/pokemon/PokemonCard.module.scss";
import cn from "classnames";

interface IPokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: FC<IPokemonCardProps> = ({ pokemon }) => {
  return (
    <HoverCard width={190} height={240}>
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
        <div className={styles.cardTitle}>
          <h1>{capitalizeFirstLetter(pokemon.name)}</h1>
          <p>{pokemon.stats[0].base_stat}HP</p>
        </div>
        <div className={styles.cardText}>
          <div className={styles.abilities}>
            {pokemon.abilities.slice(0, 1).map(({ ability }, index) => (
              <Ability url={ability.url} key={index} />
            ))}
          </div>
          <div className={styles.stats}>
            {pokemon.stats.slice(1, 5).map((stat, index) => (
              <div className={styles.statWrapper} key={index}>
                <div
                  className={cn(styles.statContainer, styles[stat.stat.name])}
                >
                  <p className={styles.stat}>{stat.base_stat}</p>
                  <p className={styles.statName}>{stat.stat.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </HoverCard>
  );
};

const Ability = ({ url }: { url: string }) => {
  const abilityInfo = usePokemonAbility(url);
  if (!abilityInfo) return <></>;
  return (
    <div className={styles.ability}>
      <h1>{capitalizeFirstLetter(abilityInfo.name)}</h1>
      <hr />
      <p>{abilityInfo.effect_entries[1].short_effect}</p>
    </div>
  );
};

export default PokemonCard;
