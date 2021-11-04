import React, { FC } from "react";
import Loading from "react-loader-spinner";

import { ILoaderProps } from "@/types/interfaces";

import styles from "@/styles/components/Loader.module.scss";

/**
 * Loader component for displaying a loading animation
 * @prop {ILoaderProps} loader - The type of loader that should be rendered
 * @return {JSX.Element} - The JSX code for loader component
 */
const Loader: FC<ILoaderProps> = ({ loader }): JSX.Element => {
  return (
    <div className={styles.loader}>
      <Loading
        type={loader}
        color="#273336"
        secondaryColor="#00ff80"
        height={30}
        width={30}
      />
    </div>
  );
};

export default Loader;
