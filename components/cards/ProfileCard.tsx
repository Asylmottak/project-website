import { FC } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image";

import Card from "./Card";
import Button from "../Button";
import UtilFunctions from "@/utils/functions";

import styles from "@/styles/components/cards/ProfileCard.module.scss";

/**
 * LoginCard component
 * @return {JSX.Element} - The JSX code for Login component
 */
const LoginCard: FC = (): JSX.Element => {
  const { user } = useUser();

  return (
    <Card>
      <div className={styles.card}>
        <div className={styles.picture}>
          {user?.picture && (
            <Image
              src={user.picture}
              alt="profile-picture"
              width={75}
              height={75}
            />
          )}
        </div>
        <h1>{user?.name}</h1>
        <Button
          text="Logout"
          onClick={() => UtilFunctions.redirect("/api/auth/logout")}
        />
      </div>
    </Card>
  );
};

export default LoginCard;
