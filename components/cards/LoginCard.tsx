import { FC } from "react";

import Card from "./Card";

import styles from "@/styles/components/cards/LoginCard.module.scss";

/**
 * LoginCard component
 * @return {JSX.Element} - The JSX code for Login component
 */
const LoginCard: FC = (): JSX.Element => {
  return (
    <Card>
      <div className={styles.card}>Login</div>
    </Card>
  );
};

export default LoginCard;
