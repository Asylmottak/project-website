import { FC } from "react";

import styles from "@/styles/pages/frithjof/design/Design.module.scss";

interface IDesignProps {}

/**
 * Design component
 * @return {JSX.Element} - The JSX code for Design component
 */
const Design: FC<IDesignProps> = (): JSX.Element => {
  return <div className={styles.design}>Design</div>;
};

export default Design;
