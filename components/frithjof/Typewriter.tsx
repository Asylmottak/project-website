import { FC } from "react";

import styles from "@/styles/components/frithjof/Typewriter.module.scss";

interface ITypewriterProps {}

/**
 * Typewriter component
 * @return {JSX.Element} - The JSX code for Typewriter component
 */
const Typewriter: FC<ITypewriterProps> = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h1 className={styles.typewriter}>Hello, my name is Frithjof...</h1>
    </div>
  );
};

export default Typewriter;
