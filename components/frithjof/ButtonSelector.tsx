import { FC, useEffect } from "react";

import { IButtonSelectorState } from "@/types/interfaces";

import styles from "@/styles/components/frithjof/ButtonSelector.module.scss";

interface IButtonSelectorProps {
  states: IButtonSelectorState[];
  toggle: (index: number) => void;
}

/**
 * ButtonSelector component
 * @prop {IButtonSelectorState[]} states - The states that can be toggled
 * @return {JSX.Element} - The JSX code for ButtonSelector component
 */
const ButtonSelector: FC<IButtonSelectorProps> = ({
  states,
  toggle,
}): JSX.Element => {
  useEffect(() => {
    console.log("States changed!");
  }, [states]);

  return (
    <div className={styles.buttons}>
      {states.map((state, key) => (
        <button
          className={state.active ? styles.active : styles.idle}
          onClick={() => toggle(key)}
          key={key}
        >
          {state.name}
        </button>
      ))}
    </div>
  );
};

export default ButtonSelector;
