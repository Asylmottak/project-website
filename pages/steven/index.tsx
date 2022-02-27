import { FC } from "react";

import styles from "@/styles/pages/steven/Steven.module.scss";
import Navbar from "@/components/steven/Navbar";
import { projectCards } from "@/utils/steven/data";
import ProjectCard from "@/components/steven/ProjectCard";
import { WeatherIcon } from "@/components/WeatherIcon";
import Tilt from "react-parallax-tilt";
/**
 * Steven's main page
 * @return {JSX.Element} - The JSX code for Steven's page
 */
const Steven: FC = (): JSX.Element => {
  const previewCards = projectCards.slice(0, 4);
  return (
    <div className={styles.steven}>
      <Navbar />
      <div className={styles.weather}>
        <WeatherIcon size={60} />
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Hi! I am Steven</h1>
          <p>
            I am a 4th year student, currently studying Computer Science at
            Norwegian University of Science and Technology (NTNU), with
            previously completed 5 semesters of Electronics Systems Design and
            Innovation. In addition I have some experience with both Web
            Development (full stack development using React, TypeScript and
            GraphQL) and Game Development (using Unity) through personal
            projects.
          </p>
        </div>
        <div className={styles.previewCards}>
          {previewCards.map((projectCard, index) => {
            return (
              <Tilt key={index}>
                <ProjectCard
                  title={projectCard.title}
                  imagePath={projectCard.imagePath}
                  text={projectCard.text}
                  redirect={projectCard.redirect}
                />
              </Tilt>
            );
          })}
        </div>
      </div>
      <div className={styles.projects}>
        <h1>All projects</h1>
        <div className={styles.allCards}>
          {projectCards.map((projectCard, index) => {
            return (
              <ProjectCard
                key={index}
                title={projectCard.title}
                imagePath={projectCard.imagePath}
                text={projectCard.text}
                redirect={projectCard.redirect}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.background} />
    </div>
  );
};

export default Steven;
