import { FC } from "react";
import Tilt from "react-parallax-tilt";

import styles from "@/styles/components/cards/HoverCard.module.scss";

interface IHoverCardProps {
  children: JSX.Element;
  width: number;
  height: number;
}

/**
 * HoverCard component which will glow with rbg lighting on hover
 * @prop {JSX.Element} - The content of the HoverCard
 * @prop {width} - The width of the card
 * @prop {height} - The height of the card
 * @return {JSX.Element} - The JSX code for HoverCard component
 */
const HoverCard: FC<IHoverCardProps> = ({
  children,
  width,
  height,
}): JSX.Element => {
  return (
    <Tilt className={styles.tilt} style={{ width: width, height: height }}>
      <div className={styles.hoverCard}>{children}</div>
      <div className={styles.rgb}></div>
    </Tilt>
  );
};

export default HoverCard;
