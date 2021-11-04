import { FC } from "react";

import styles from "@/styles/components/cards/ProjectCard.module.scss";
import Card from "./Card";
import Button from "../Button";
import UtilFunctions from "@/utils/functions";

interface IProjectCardProps {
  title: string;
  description: string;
  image: string;
}

/**
 * ProjectCard component
 * @prop {string} title - The project title
 * @prop {string} description - The project description
 * @prop {string} image - The project image url
 * @return {JSX.Element} - The JSX code for ProjectCard component
 */
const ProjectCard: FC<IProjectCardProps> = ({
  title,
  description,
  image,
}): JSX.Element => {
  return (
    <Card>
      <div className={styles.card}>
        <img src={image} alt="ProjectImage" width={200} height={60} />
        <h1>{title}</h1>
        <p>{description}</p>
        <Button
          text="View Project"
          onClick={() => UtilFunctions.redirect("/frithjof/pokemon")}
        />
      </div>
    </Card>
  );
};

export default ProjectCard;
