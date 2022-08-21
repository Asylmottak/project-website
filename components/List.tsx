import { FC } from "react";

import styles from "@/styles/components/steven/List.module.scss";

interface IListProps {
  children: JSX.Element[];
  gap: number;
}

/**
 * List component
 * @return {JSX.Element} - The JSX code for List component
 * @prop {gap} - The spacing between items in the list
 */
const List: FC<IListProps> = ({ children, gap }): JSX.Element => {
  return (
    <div className={styles.list} style={{ gap: gap }}>
      {children}
    </div>
  );
};

export default List;
