import { FC } from "react";

import Card from "./Card";
import UtilFunctions from "@/utils/functions";

import styles from "@/styles/components/cards/UserCard.module.scss";

export interface IUserCardProps {
  name: string;
  image: string;
  redirect: string;
}

/**
 * UserCard component
 * @prop {string} name - The name of user
 * @prop {string} image - The user image
 * @prop {string} redirect - The redirect link to user page
 * @return {JSX.Element} - The JSX code for UserCard component
 */
const UserCard: FC<IUserCardProps> = ({
  name,
  image,
  redirect,
}): JSX.Element => {
  return (
    <Card animated={false} onClick={() => UtilFunctions.redirect(redirect)}>
      <div className={styles.card}>
        <img src={image} alt="Avatar" />
        <h1 className={styles.name}>{name}</h1>
      </div>
    </Card>
  );
};

export default UserCard;
