import { FC } from "react";

import Nav from "@/components/frithjof/Nav";
import paintImage from "@/assets/paint.png";
import { imageUrls } from "@/utils/data";
import ProjectCard, { IProjectCardProps } from "@/components/cards/ProjectCard";

import styles from "@/styles/pages/frithjof/Frithjof.module.scss";

/**
 * Firthjof's home page
 * @return {JSX.Element} - The JSX code for Frithjof page
 */
const Frithjof: FC = (): JSX.Element => {
  const projectCards: IProjectCardProps[] = [
    {
      title: "Pokemon",
      image: imageUrls.pokemon,
      redirect: "/frithjof/pokemon",
      description:
        "Design project displaying different pokemon using the SpotifyAPI.",
    },
    {
      title: "Spotify",
      image: imageUrls.spotify,
      redirect: "/frithjof/spotify",
      description:
        "Fullstack project using SpotifyAPI to integrate with your own Spotify account.",
    },
  ];

  return (
    <div
      className={styles.frithjof}
      style={{ backgroundImage: `url(${paintImage.src})` }}
    >
      <Nav />
      <h1 className={styles.title}>Frithjof Thorvik</h1>
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
