import { FC } from "react";

import styles from "@/styles/components/frithjof/Typewriter.module.scss";

interface ITypewriterProps {
  text: string;
}

/**
 * Typewriter component
 * @prop {string} text    - The text that should be typed
 * @return {JSX.Element}  - The JSX code for Typewriter component
 */
const Typewriter: FC<ITypewriterProps> = ({ text }): JSX.Element => {
  return (
    <div className={styles.typewriter}>
      <h1 className={styles.text}>{text}</h1>
    </div>
  );
};

export default Typewriter;
