import { FC } from "react";
import Image from "next/image";

import Card from "./Card";
import Button from "@/components/Button";
import UtilFunctions from "@/utils/functions";
import googleImage from "@/assets/google.png";
import githubImage from "@/assets/github.png";

import styles from "@/styles/components/cards/LoginCard.module.scss";

/**
 * LoginCard component
 * @return {JSX.Element} - The JSX code for Login component
 */
const LoginCard: FC = (): JSX.Element => {
  return (
    <Card>
      <div className={styles.card}>
        <h1>Login</h1>
        <p>Log into your account with Google or GitHub...</p>
        <Button
          text="Login"
          onClick={() => UtilFunctions.redirect("/api/auth/login")}
        />
        <div className={styles.images}>
          <Image src={googleImage} alt="GoogleImage" width={30} height={30} />
          <Image src={githubImage} alt="GoogleImage" width={30} height={30} />
        </div>
      </div>
    </Card>
  );
};

export default LoginCard;
