import { FC } from "react";

import Card from "./Card";
import UtilFunctions from "@/utils/functions";

import styles from "@/styles/components/cards/ProjectCard.module.scss";

export interface IProjectCardProps {
  title: string;
  image: string;
  redirect: string;
  description: string;
}

/**
 * ProjectCard component
 * @prop {string} title       - The project title
 * @prop {string} image       - The project image url
 * @prop {string} redirect    - The project image url
 * @prop {string} description - The project description
 * @return {JSX.Element}      - The JSX code for ProjectCard component
 */
const ProjectCard: FC<IProjectCardProps> = ({
  title,
  image,
  redirect,
  description,
}): JSX.Element => {
  return (
    <Card onClick={() => UtilFunctions.redirect(redirect)}>
      <div className={styles.card}>
        <img src={image} alt="ProjectImage" width={200} height={60} />
        <h1 className={styles.title}>{title}</h1>
        <p>{description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
