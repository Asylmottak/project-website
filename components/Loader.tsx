import React, { FC } from "react";
import Loading from "react-loader-spinner";

import { ILoaderProps } from "../types/componentInterfaces";

import styles from "../styles/components/Loader.module.scss";

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
