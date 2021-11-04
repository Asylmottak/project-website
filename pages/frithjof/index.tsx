import { FC } from "react";

import Nav from "@/components/frithjof/Nav";
import paintImage from "@/assets/paint.png";
import ProjectCard from "@/components/cards/ProjectCard";

import styles from "@/styles/pages/frithjof/Frithjof.module.scss";

/**
 * Firthjof's home page
 * @return {JSX.Element} - The JSX code for Frithjof page
 */
const Frithjof: FC = (): JSX.Element => {
  const pokemonImage =
    "https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg";
  const spotifyImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Spotify.png/640px-Spotify.png";

  return (
    <div
      className={styles.frithjof}
      style={{ backgroundImage: `url(${paintImage.src})` }}
    >
      <Nav />
      <h1 className={styles.title}>Frithjof Thorvik</h1>
      <div className={styles.section}>
        <ProjectCard
          title="Pokemon"
          description="Design project displaying different pokemon using the SpotifyAPI."
          image={pokemonImage}
        />
        <ProjectCard
          title="Spotify"
          description="Fullstack project using SpotifyAPI to integrate with your own Spotify account."
          image={spotifyImage}
        />
        <ProjectCard
          title="Pokemon"
          description="Design project displaying different pokemon using the SpotifyAPI."
          image={pokemonImage}
        />
        {/* <ProjectCard
          title="Spotify"
          description="Fullstack project using SpotifyAPI to integrate with your own Spotify account."
          image={spotifyImage}
        />
        <ProjectCard
          title="Spotify"
          description="Fullstack project using SpotifyAPI to integrate with your own Spotify account."
          image={spotifyImage}
        />
        <ProjectCard
          title="Spotify"
          description="Fullstack project using SpotifyAPI to integrate with your own Spotify account."
          image={spotifyImage}
        /> */}
      </div>
    </div>
  );
};

export default Frithjof;
