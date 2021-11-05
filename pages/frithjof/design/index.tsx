import { FC, useState } from "react";

import Nav from "@/components/frithjof/Nav";

import { IButtonSelectorState } from "@/types/interfaces";
import { initialDesignState } from "@/utils/frithjof/data";
import UtilFunctions from "@/utils/functions";
import ButtonSelector from "@/components/frithjof/ButtonSelector";
import styles from "@/styles/pages/frithjof/design/Design.module.scss";
import NeonButton from "@/components/NeonButton";
import Typewriter from "@/components/frithjof/Typewriter";
import Card from "@/components/cards/Card";

interface IDesignProps {}

/**
 * Design component
 * @return {JSX.Element} - The JSX code for Design component
 */
const Design: FC<IDesignProps> = (): JSX.Element => {
  const [state, setState] =
    useState<IButtonSelectorState[]>(initialDesignState);

  /**
   * Toggles design at provided index value
   * @param {number} index - The index value of where it is placed in the state array
   */
  const toggleDesign = (index: number): void => {
    // Check if index is in scope of state length
    if (state.length > index) {
      // Copy current state without reference
      const stateCopy: IButtonSelectorState[] =
        UtilFunctions.copyObjectWithoutRef(state);

      // Disable all designs
      for (let i = 0; i < stateCopy.length; i++) {
        stateCopy[i].active = false;
      }

      // Toggle chosen design
      stateCopy[index].active = !stateCopy[index].active;
      setState(stateCopy);
    }
  };

  return (
    <div className={styles.designs}>
      <Nav />
      <div className={styles.design}>
        {state[0].active && <NeonButton />}
        {state[1].active && (
          <Typewriter text="This is a typewriter made with scss!" />
        )}
        {state[2].active && (
          <Card>
            <h1>Hello</h1>
          </Card>
        )}
      </div>
      <div className={styles.selector}>
        <h1>Designs</h1>
        <ButtonSelector states={state} toggle={toggleDesign} />
      </div>
    </div>
  );
};

export default Design;
