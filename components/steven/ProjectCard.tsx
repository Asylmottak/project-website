import { FC } from "react";

import styles from "@/styles/pages/steven/Steven.module.scss";
import UtilFunctions from "@/utils/functions";
export interface IProjectCardProps {
  title: string;
  imagePath: string;
  text: string;
  redirect: string;
}

/**
 * Project Card component
 * @prop {string}      title  - Title of project
 * @prop {string}     imagePath   - Path to background image
 * @prop {string}  text  - The content of the card
 * @prop {string}  redirect  - The link to where the project can be found
 * @return {JSX.Element}          - The JSX code for Project Card component
 */
const Card: FC<IProjectCardProps> = ({
  title,
  imagePath,
  text,
  redirect,
}): JSX.Element => {
  return (
    <div
      className={styles.card}
      onClick={() => UtilFunctions.redirect(redirect)}
    >
      <img src={imagePath} alt="card" />
      <h2>{title}</h2>
      <hr />
      <p>{text}</p>
    </div>
  );
};

export default Card;
