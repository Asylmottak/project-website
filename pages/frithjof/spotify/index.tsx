import { FC } from "react";

import styles from "@/styles/pages/frithjof/spotify/Spotify.module.scss";

interface ISpotifyProps {}

/**
 * Spotify component
 * @return {JSX.Element} - The JSX code for Spotify component
 */
const Spotify: FC<ISpotifyProps> = (): JSX.Element => {
  return <div className={styles.spotify}>Spotify</div>;
};

export default Spotify;
