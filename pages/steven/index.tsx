import { FC } from "react";

import Button from "@/components/Button";

import styles from "@/styles/pages/steven/Steven.module.scss";
import UtilFunctions from "@/utils/functions";

/**
 * Steven's main page
 * @return {JSX.Element} - The JSX code for Steven's page
 */
const Steven: FC = (): JSX.Element => {
  return (
    <div className={styles.steven}>
      <p>Hello my name is Steven😄</p>
      <Button
        text={"POKEMON"}
        onClick={() => UtilFunctions.redirect("/steven/pokemon")}
      />
    </div>
  );
};

export default Steven;
