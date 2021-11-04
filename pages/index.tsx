import React, { FC } from "react";

import styles from "@/styles/pages/Home.module.scss";
import Link from "next/link";

/**
 * This is the home page
 * @return {JSX.Element} The JSX code for home page
 */
const Home: FC = (): JSX.Element => {
  return (
    <div className={styles.home}>
      <Link href="/frithjof">Frithjof</Link>
    </div>
  );
};

export default Home;
