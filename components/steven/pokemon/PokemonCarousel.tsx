import styles from "@/styles/components/steven/pokemon/PokemonCarousel.module.scss";
import cn from "classnames";
import PokeData from "./PokemonData";
import usePokemon from "hooks/usePokemon";

import { useEffect, useState } from "react";

interface IPokemonIdArray {
  nextItems: Array<number>;
  prevItems: Array<number>;
  displayItems: Array<number>;
}
const PokemonCarousel = ({ stat }: any) => {
  const [pokemon, loading, setLoading] = usePokemon(10);
  const [index, setIndex] = useState(0);
  const previewPrev = 2;
  const previewNext = 2;
  const [pokemonIdArray, setPokemonIdArray] = useState<IPokemonIdArray>({
    nextItems: [],
    prevItems: [],
    displayItems: [],
  });

  const getPokemonArrayIDs = () => {
    const startArray = [...pokemon.slice(index), ...pokemon.slice(0, index)];
    const displayArray = [
      ...startArray.splice(-previewPrev),
      ...startArray.splice(0, previewNext + 1),
    ].map((item) => pokemon.indexOf(item));

    const remainingArray = startArray
      .map((item) => pokemon.indexOf(item))
      .filter((id) => !displayArray.includes(id));

    return {
      nextItems: [
        ...displayArray.slice(Math.ceil(displayArray.length / 2)),
        ...remainingArray.splice(0, Math.ceil(remainingArray.length / 2) - 1),
      ],
      prevItems: [
        ...displayArray
          .slice(0, Math.ceil(displayArray.length / 2) - 1)
          .reverse(),
        ...remainingArray.reverse(),
      ],
      displayItems: displayArray,
    };
  };

  const decrementIndex = () => {
    setIndex((currentIndex) =>
      currentIndex > 0 ? currentIndex - 1 : pokemon.length - 1
    );
  };
  const incrementIndex = () => {
    setIndex((currentIndex) =>
      currentIndex < pokemon.length - 1 ? currentIndex + 1 : 0
    );
  };

  useEffect(() => {
    const temp = getPokemonArrayIDs();
    setPokemonIdArray({
      displayItems: [...temp.displayItems],
      nextItems: [...temp.nextItems],
      prevItems: [...temp.prevItems],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const temp = getPokemonArrayIDs();
    setPokemonIdArray({
      displayItems: [...temp.displayItems],
      nextItems: [...temp.nextItems],
      prevItems: [...temp.prevItems],
    });

    !loading &&
      index == pokemon.length - (previewNext + 1 + previewPrev) &&
      setLoading(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, pokemon]);

  return (
    <div className={styles.carousel}>
      <PrevButton handleClick={decrementIndex} />
      <div className={styles.carousel__items}>
        <div className={styles.carousel__items__center}>
          {pokemon.map((item, idx) => {
            let margin = "0px";
            if (pokemonIdArray.prevItems.includes(idx))
              margin = `${
                -280 * (pokemonIdArray.prevItems.indexOf(idx) + 1)
              }px`;
            else if (pokemonIdArray.nextItems.includes(idx))
              margin = `${280 * (pokemonIdArray.nextItems.indexOf(idx) + 1)}px`;
            return (
              <div
                className={cn(styles.carousel__items__center__item, {
                  [styles[
                    `carousel__items__center__item-${pokemonIdArray.displayItems.indexOf(
                      idx
                    )}`
                  ]]: pokemonIdArray.displayItems.includes(idx),
                  [styles.carousel__items__center__item__disabled]:
                    !pokemonIdArray.displayItems.includes(idx),
                })}
                style={{
                  left: margin,
                }}
                key={idx}
              >
                <div
                  key={item.id}
                  className={styles.card}
                  onClick={() => setIndex(idx)}
                >
                  <div className={styles.card__content}>
                    <PokeData pokemon={item} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <NextButton handleClick={incrementIndex} />
    </div>
  );
};

const PrevButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <a onClick={handleClick} className={`${styles.button} ${styles.left}`}></a>
  );
};

const NextButton = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <a onClick={handleClick} className={`${styles.button} ${styles.right}`}></a>
  );
};

export default PokemonCarousel;
