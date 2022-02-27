import { FC } from "react";

import { projectCards } from "@/utils/frithjof/data";
import Nav from "@/components/frithjof/Nav";
import paintImage from "@/assets/paint.png";
import ProjectCard from "@/components/cards/ProjectCard";
import Typewriter from "@/components/frithjof/Typewriter";

import styles from "@/styles/pages/frithjof/Frithjof.module.scss";

/**
 * Firthjof's home page
 * @return {JSX.Element} - The JSX code for Frithjof page
 */
const Frithjof: FC = (): JSX.Element => {
  return (
    <div
      className={styles.frithjof}
      style={{ backgroundImage: `url(${paintImage.src})` }}
    >
      <Nav />
      <Typewriter text="Hello, my name is Frithjof..." />
      <div className={styles.section}>
        {projectCards.map((p, key) => (
          <ProjectCard
            title={p.title}
            image={p.image}
            redirect={p.redirect}
            description={p.description}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};

export default Frithjof;
