import { FC } from "react";

import styles from "@/styles/components/NeonButton.module.scss";

interface INeonButtonProps {}

/**
 * NeonButton component
 * @return {JSX.Element} - The JSX code for NeonButton component
 */
const NeonButton: FC<INeonButtonProps> = (): JSX.Element => {
  return <button className={styles.button}>NeonButton</button>;
};

export default NeonButton;
