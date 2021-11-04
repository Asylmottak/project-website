import { FC } from "react";

import styles from "@/styles/components/Button.module.scss";

interface IButtonProps {
  text: string;
  onClick: () => void;
}

/**
 * Button component
 * @prop {string}   text    - The text inside the button
 * @prop {function} onClick - The function for handling click
 * @return {JSX.Element}    - The JSX code for Button component
 */
const Button: FC<IButtonProps> = ({ text, onClick }): JSX.Element => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
