import styles from "@/styles/components/steven/Carousel.module.scss";
import cn from "classnames";

import { useEffect, useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
enum DIR {
  // eslint-disable-next-line no-unused-vars
  LEFT = "left",
  // eslint-disable-next-line no-unused-vars
  RIGHT = "right",
}

const Carousel = ({ newStyles, children, loading, setLoading }: any) => {
  const previewAmount = 2;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<DIR>(DIR.RIGHT);
  const [displayArray, setDisplayArray] = useState<number[]>([]);
  const itemRefs = useRef<(null | HTMLDivElement)[]>([]);

  const getArrayIDs = () => {
    if (!children) return displayArray;
    const startArray = [...children.slice(index), ...children.slice(0, index)];

    return [
      ...startArray.splice(-previewAmount),
      ...startArray.splice(0, previewAmount + 1),
    ];
  };

  const decrementIndex = (amount: number) => {
    setDirection(DIR.LEFT);
    children &&
      setIndex((currentIndex) =>
        currentIndex > 0 ? currentIndex - amount : children.length - amount
      );
  };

  const incrementIndex = (amount: number) => {
    setDirection(DIR.RIGHT);
    children &&
      setIndex((currentIndex) =>
        currentIndex < children.length - amount ? currentIndex + amount : 0
      );
  };

  const handleClick = (idx: number) => {
    const difference = idx - previewAmount;
    difference > 0
      ? incrementIndex(difference)
      : decrementIndex(Math.abs(difference));
  };

  useEffect(() => {
    itemRefs.current.forEach((e) => {
      e?.classList.remove(styles[DIR.LEFT]);
      e?.classList.remove(styles[DIR.RIGHT]);
      e?.classList.add(styles[direction]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    setDisplayArray(getArrayIDs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setDisplayArray(getArrayIDs());

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
      <PrevButton handleClick={() => decrementIndex(1)} newStyles={newStyles} />
      <div
        className={cn({
          [newStyles?.carousel__items || ""]: newStyles?.carousel__items,
          [styles.carousel__items]: !newStyles?.carousel__items,
        })}
      >
        {displayArray.map((item: any, idx: number) => {
          return (
            <div
              ref={(element) => itemRefs?.current?.push(element)}
              key={idx}
              className={cn({
                [newStyles?.carousel__items__item || ""]:
                  newStyles?.carousel__items__item,
                [styles.carousel__items__item]:
                  !newStyles?.carousel__items__item,
              })}
              onClick={() => handleClick(idx)}
              onAnimationEnd={() =>
                itemRefs?.current.at(idx)?.classList.remove(styles[direction])
              }
            >
              {item}
            </div>
          );
        })}
      </div>
      <NextButton handleClick={() => incrementIndex(1)} newStyles={newStyles} />
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
