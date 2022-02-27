import { abilityColors } from "@/utils/steven/pokemon/pokemonUtils";

import styles from "@/styles/components/steven/pokemon/PokemonStat.module.css";

const PokemonStat = ({ stat }: any) => {
  return (
    <div className={styles.statContainer}>
      <div className={styles.stat}>
        <div
          style={{
            color: abilityColors[`${stat.stat.name}`],
            backgroundColor: abilityColors[`${stat.stat.name}`],
            width: `${stat["base_stat"] / 1.5}%`,
          }}
        />
      </div>
      <span>{stat.stat.name}</span>
    </div>
  );
};

export default PokemonStat;
