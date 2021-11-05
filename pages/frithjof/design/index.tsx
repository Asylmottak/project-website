import { FC, useState } from "react";

import Nav from "@/components/frithjof/Nav";

import styles from "@/styles/pages/frithjof/design/Design.module.scss";
import ButtonSelector from "@/components/frithjof/ButtonSelector";
import { IButtonSelectorState } from "@/types/interfaces";
import NeonButton from "@/components/NeonButton";
import Typewriter from "@/components/frithjof/Typewriter";
import Card from "@/components/cards/Card";
import UtilFunctions from "@/utils/functions";

// Create initial design state that should be available to display on the page
const initialDesignState: IButtonSelectorState[] = [
  {
    name: "Neon Button",
    active: false,
    component: <NeonButton />,
  },
  {
    name: "Typewriter",
    active: false,
    component: <Typewriter text="This is a typewriter made with scss!" />,
  },
  {
    name: "Rainbow Card",
    active: true,
    component: (
      <Card>
        <p>This is a card!</p>
      </Card>
    ),
  },
];

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
      const stateCopy: IButtonSelectorState[] =
        UtilFunctions.copyObjectWithoutRef(state);
      stateCopy[index].active = !stateCopy[index].active;
      setState(stateCopy);
    }
  };

  return (
    <div className={styles.designs}>
      <Nav />
      <h1>Designs</h1>
      <ButtonSelector states={initialDesignState} toggle={toggleDesign} />
      <div className={styles.design}>
        {state[0].active && <h1>Neon Button</h1>}
        {state[1].active && <h1>Type Writer</h1>}
        {state[2].active && <h1>Rainbow Card</h1>}
      </div>
    </div>
  );
};

export default Design;
