import { FC } from "react";
import Navbar from "@/components/steven/Navbar";

import styles from "@/styles/pages/steven/About.module.scss";

interface IAboutProps {}

/**
 * About component
 * @return {JSX.Element} - The JSX code for About component
 */
const About: FC<IAboutProps> = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <div className={styles.about}>About</div>
    </>
  );
};

export default About;
