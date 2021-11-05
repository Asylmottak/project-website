import { imageUrls } from "../data";
import { IProjectCardProps } from "@/components/cards/ProjectCard";
import { IButtonSelectorState } from "@/types/interfaces";
import NeonButton from "@/components/NeonButton";
import Card from "@/components/cards/Card";
import Typewriter from "@/components/frithjof/Typewriter";

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
    component: <NeonButton />,
  },
  {
    name: "Typewriter",
    active: false,
    component: <Typewriter text="This is a typewriter made with scss!" />,
  },
  {
    name: "Rainbow Card",
    active: true,
    component: (
      <Card>
        <p>This is a card!</p>
      </Card>
    ),
  },
];
