import React, { FC } from "react";

import styles from "../styles/pages/Home.module.scss";

/**
 * This is the home page
 * @return {JSX.Element} The JSX code for home page
 */
const Home: FC = (): JSX.Element => {
  return <div className={styles.home}>Home</div>;
};

export default Home;
