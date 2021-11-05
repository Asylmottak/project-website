import { FC } from "react";
import Tilt from "react-parallax-tilt";

import styles from "@/styles/components/cards/Card.module.scss";

interface ICardProps {
  animated?: boolean;
  onClick?: () => void;
  children: JSX.Element;
}

/**
 * Card component
 * @prop {boolean}      animated  - Decides if shadow is animated or not
 * @prop {function}     onClick   - Function for handling card click
 * @prop {JSX.Element}  children  - The content of the card
 * @return {JSX.Element}          - The JSX code for Card component
 */
const Card: FC<ICardProps> = ({
  animated = true,
  onClick,
  children,
}): JSX.Element => {
  return (
    <Tilt tiltReverse={true} transitionSpeed={1000}>
      <div
        className={animated ? styles.card : styles.cardStatic}
        onClick={onClick}
      >
        {children}
      </div>
    </Tilt>
  );
};

export default Card;
