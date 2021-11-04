import React, { FC } from "react";
import { useUser } from "@auth0/nextjs-auth0";

import LoginCard from "@/components/cards/LoginCard";
import ProfileCard from "@/components/cards/ProfileCard";

import styles from "@/styles/pages/Home.module.scss";
import Button from "@/components/Button";
import UtilFunctions from "@/utils/functions";

/**
 * This is the home page
 * @return {JSX.Element} The JSX code for home page
 */
const Home: FC = (): JSX.Element => {
  const { user } = useUser();

  return (
    <div className={styles.home}>
      {!user ? <LoginCard /> : <ProfileCard />}
      <div className={styles.admins}>
        <Button
          text="Steven"
          onClick={() => UtilFunctions.redirect("/steven")}
        />
        <Button
          text="Frithjof"
          onClick={() => UtilFunctions.redirect("/frithjof")}
        />
        <Button
          text="Sander"
          onClick={() => UtilFunctions.redirect("/sander")}
        />
      </div>
    </div>
  );
};

export default Home;
