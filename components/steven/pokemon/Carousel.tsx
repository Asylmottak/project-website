import styles from "@/styles/components/steven/Carousel.module.scss";
import cn from "classnames";

import { useEffect, useState, useRef } from "react";

interface IIdArray {
  nextItems: Array<number>;
  prevItems: Array<number>;
  displayItems: Array<number>;
}
const Carousel = ({ newStyles, children, loading, setLoading }: any) => {
  const itemsRef = useRef<any>([]);
  const containerRef = useRef<any>(null);
  const [index, setIndex] = useState(0);
  const previewAmount = 2;
  const [idArray, setIdArray] = useState<IIdArray>({
    nextItems: [],
    prevItems: [],
    displayItems: [],
  });

  const getPokemonArrayIDs = () => {
    if (!children) return idArray;
    const startArray = [...children.slice(index), ...children.slice(0, index)];
    const displayArray = [
      ...startArray.splice(-previewAmount),
      ...startArray.splice(0, previewAmount + 1),
    ].map((item) => children.indexOf(item));

    const remainingArray = startArray
      .map((item) => children.indexOf(item))
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
    children &&
      setIndex((currentIndex) =>
        currentIndex > 0 ? currentIndex - 1 : children.length - 1
      );
  };

  const incrementIndex = () => {
    children &&
      setIndex((currentIndex) =>
        currentIndex < children.length - 1 ? currentIndex + 1 : 0
      );
  };

  useEffect(() => {
    const temp = getPokemonArrayIDs();
    setIdArray({
      displayItems: [...temp.displayItems],
      nextItems: [...temp.nextItems],
      prevItems: [...temp.prevItems],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const temp = getPokemonArrayIDs();
    setIdArray({
      displayItems: [...temp.displayItems],
      nextItems: [...temp.nextItems],
      prevItems: [...temp.prevItems],
    });

    children &&
      !loading &&
      index == children.length - (2 * previewAmount + 1) &&
      setLoading &&
      setLoading(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, children]);

  if (!children) return null;
  return (
    <div
      className={cn({
        [newStyles?.carousel || ""]: newStyles?.carousel,
        [styles.carousel]: !newStyles?.carousel,
      })}
    >
      <PrevButton handleClick={decrementIndex} newStyles={newStyles} />
      <div
        className={cn({
          [newStyles?.carousel__items || ""]: newStyles?.carousel__items,
          [styles.carousel__items]: !newStyles?.carousel__items,
        })}
        ref={containerRef}
      >
        {children.map((item: any, idx: number) => {
          const displayIndex = idArray.displayItems.indexOf(idx);
          let dir = "right";
          if (idArray.prevItems.includes(idx)) {
            dir = "left";
          }

          return (
            <div
              className={cn({
                [newStyles?.carousel__items__item || ""]:
                  newStyles?.carousel__items__item,
                [styles.carousel__items__item]:
                  !newStyles?.carousel__items__item,
                [styles[`carousel__items__item-${displayIndex}`]]:
                  displayIndex != -1 &&
                  !newStyles[`carousel__items__item-${displayIndex}`],
                [newStyles[`carousel__items__item-${displayIndex}`]]:
                  displayIndex != -1 &&
                  newStyles[`carousel__items__item-${displayIndex}`],
                [styles.carousel__items__item__disabled]:
                  displayIndex == -1 &&
                  !newStyles?.carousel__items__item__disabled,
                [newStyles?.carousel__items__item__disabled || ""]:
                  displayIndex == -1 &&
                  newStyles?.carousel__items__item__disabled,

                [styles[`carousel__items__item__disabled-${dir}`]]:
                  displayIndex == -1 &&
                  !newStyles[`carousel__items__item__disabled-${dir}`],
                [newStyles[`carousel__items__item__disabled-${dir}`]]:
                  displayIndex == -1 &&
                  newStyles[`carousel__items__item__disabled-${dir}`],

                [styles.carousel__items__item__active]:
                  displayIndex == previewAmount &&
                  !newStyles?.carousel__items__item__active,
                [newStyles?.carousel__items__item__active || ""]:
                  displayIndex == previewAmount &&
                  newStyles?.carousel__items__item__active,
              })}
              key={idx}
              ref={(el) => (itemsRef.current[idx] = el)}
            >
              <div
                className={cn({
                  [newStyles?.carousel__items__item__card || ""]:
                    newStyles?.carousel__items__item__card,
                  [styles.carousel__items__item__card]:
                    !newStyles?.carousel__items__item__card,
                })}
                onClick={() => setIndex(idx)}
              >
                <div
                  className={cn({
                    [newStyles?.carousel__items__item__card__content || ""]:
                      newStyles?.carousel__items__item__card__content,
                    [styles.carousel__items__item__card__content]:
                      !newStyles?.carousel__items__item__card__content,
                  })}
                >
                  {item}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <NextButton handleClick={incrementIndex} newStyles={newStyles} />
    </div>
  );
};

const PrevButton = ({
  handleClick,
  newStyles,
}: {
  handleClick: () => void;
  newStyles?: { [key: string]: string };
}) => {
  return (
    <a
      onClick={handleClick}
      className={cn({
        [newStyles?.carousel__button || ""]: newStyles?.carousel__button,
        [styles.carousel__button]: !newStyles?.carousel__button,
        [newStyles?.carousel__button__left || ""]:
          newStyles?.carousel__button__left,
        [styles.carousel__button__left]: !newStyles?.carousel__button__left,
      })}
    ></a>
  );
};

const NextButton = ({
  handleClick,
  newStyles,
}: {
  handleClick: () => void;
  newStyles?: { [key: string]: string };
}) => {
  return (
    <a
      onClick={handleClick}
      className={cn({
        [newStyles?.carousel__button || ""]: newStyles?.carousel__button,
        [styles.carousel__button]: !newStyles?.carousel__button,
        [newStyles?.carousel__button__right || ""]:
          newStyles?.carousel__button__right,
        [styles.carousel__button__right]: !newStyles?.carousel__button__right,
      })}
    ></a>
  );
};

export default Carousel;
