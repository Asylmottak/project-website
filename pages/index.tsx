import { FC, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0";

import { loginUser } from "@/data/user";
import { userCards } from "@/utils/data";
import { useStoreDispatch } from "hooks/useStore";
import Nav from "@/components/Nav";
import UserCard from "@/components/cards/UserCard";
import GroundShadow from "@/components/GroundShadow";

import styles from "@/styles/pages/Home.module.scss";
import useTime from "hooks/useTime";

/**
 * This is the home page
 * @return {JSX.Element} The JSX code for home page
 */
const Home: FC = (): JSX.Element => {
  const { user } = useUser();
  const date = useTime();
  const dispatch = useStoreDispatch();

  /**
   * Add logged in user to redux user store
   */
  useEffect(() => {
    // Check if user exist
    if (user) {
      // Add user to user store
      dispatch(
        loginUser({
          name: user.name,
          email: user.email,
          image: user.picture,
        })
      );
    }
  }, [user, dispatch]);

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
      <p className={styles.title} style={{ color: "white", fontSize: "50px" }}>
        {date.hour}:{date.minute}:{date.second}
      </p>
      <p className={styles.title} style={{ color: "white", fontSize: "25px" }}>
        {date.day}/{date.month}/{date.year}
      </p>
    </div>
  );
};

export default Home;
