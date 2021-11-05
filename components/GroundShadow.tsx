import { FC } from "react";

import styles from "@/styles/components/GroundShadow.module.scss";

interface IGroundShadowProps {
  color?: string;
}

/**
 * GroundShadow component
 * @prop {string} color   - Color of the shadow
 * @return {JSX.Element}  - The JSX code for GroundShadow component
 */
const GroundShadow: FC<IGroundShadowProps> = ({ color }): JSX.Element => {
  return (
    <div className={styles.shadow} style={{ backgroundColor: color }}></div>
  );
};

export default GroundShadow;
