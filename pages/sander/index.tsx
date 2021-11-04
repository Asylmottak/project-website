import { FC } from "react";

import styles from "@/styles/pages/sander/Sander.module.scss";

interface ISanderProps {}

/**
 * Sander's main page
 * @return {JSX.Element} - The JSX code for Sander's page
 */
const Sander: FC<ISanderProps> = (): JSX.Element => {
  return <div className={styles.sander}>Sander</div>;
};

export default Sander;
