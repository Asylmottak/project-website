import React, { FC } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/dist/frontend";

import styles from "../styles/pages/About.module.scss";

/**
 * The about page for the application
 * @return {JSX.Element} The JSX code for about page
 */
const About: FC = (): JSX.Element => {
  return <div className={styles.about}>About</div>;
};

export default withPageAuthRequired(About);
