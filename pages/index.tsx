import { FC } from "react";

import { imageUrls } from "@/utils/data";
import UserCard, { IUserCardProps } from "@/components/cards/UserCard";
import Nav from "@/components/Nav";
import GroundShadow from "@/components/GroundShadow";

import styles from "@/styles/pages/Home.module.scss";

/**
 * This is the home page
 * @return {JSX.Element} The JSX code for home page
 */
const Home: FC = (): JSX.Element => {
  const userCards: IUserCardProps[] = [
    {
      name: "Steven Francis",
      image: imageUrls.steven,
      redirect: "/steven",
    },
    {
      name: "Frithjof Thorvik",
      image: imageUrls.frithjof,
      redirect: "/frithjof",
    },
    {
      name: "Sander Francis",
      image: imageUrls.sander,
      redirect: "/sander",
    },
  ];

  return (
    <div className={styles.home}>
      <Nav />
      <h1 className={styles.title}>Steinan Projects</h1>
      <GroundShadow color="white" />
      <div className={styles.admins}>
        {userCards.map((user, key) => (
          <UserCard
            name={user.name}
            image={user.image}
            redirect={user.redirect}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
