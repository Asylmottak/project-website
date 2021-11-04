import { FC } from "react";
import Tilt from "react-parallax-tilt";

import styles from "@/styles/components/cards/Card.module.scss";

interface ICardProps {
  children: JSX.Element;
}

/**
 * Card component
 * @prop {JSX.Element} - The content of the card
 * @return {JSX.Element} - The JSX code for Card component
 */
const Card: FC<ICardProps> = ({ children }): JSX.Element => {
  return (
    <Tilt tiltReverse={true} transitionSpeed={1000}>
      <div className={styles.card}>{children}</div>
    </Tilt>
  );
};

export default Card;
