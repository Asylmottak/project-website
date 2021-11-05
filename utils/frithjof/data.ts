import { imageUrls } from "../data";
import { IButtonSelectorState } from "@/types/interfaces";
import { IProjectCardProps } from "@/components/cards/ProjectCard";

export const projectCards: IProjectCardProps[] = [
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
  {
    title: "Design",
    image: imageUrls.scss,
    redirect: "/frithjof/design",
    description:
      "Collection of design projects displaying different aspects of scss.",
  },
];

export const initialDesignState: IButtonSelectorState[] = [
  {
    name: "Neon Button",
    active: false,
  },
  {
    name: "Typewriter",
    active: false,
  },
  {
    name: "Rainbow Card",
    active: true,
  },
];
