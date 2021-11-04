import { FC } from "react";

import Nav from "@/components/frithjof/Nav";
import paintImage from "@/assets/paint.png";
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
      description:
        "Design project displaying different pokemon using the SpotifyAPI.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg",
    },
    {
      title: "Spotify",
      description:
        "Fullstack project using SpotifyAPI to integrate with your own Spotify account.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Spotify.png/640px-Spotify.png",
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
            description={p.description}
            image={p.image}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};

export default Frithjof;
