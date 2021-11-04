import { FC } from "react";

import styles from "@/styles/pages/steven/Steven.module.scss";

interface IStevenProps {}

/**
 * Steven's main page
 * @return {JSX.Element} - The JSX code for Steven's page
 */
const Steven: FC<IStevenProps> = (): JSX.Element => {
  return <div className={styles.steven}>Steven</div>;
};

export default Steven;
