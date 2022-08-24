import { FC, useRef, useEffect, useState } from "react";

import styles from "@/styles/components/steven/DragAndDrop.module.scss";
import cn from "classnames";

interface IDragAndDropProps {
  children: JSX.Element[];
  newStyles?: { [key: string]: string };
}

interface IState {
  dragToIndex: number;
  dragFromIndex: number;
  swap: boolean;
}

/**
 * Project Card component
 * @return {JSX.Element}          - The JSX code for Project Card component
 */
const DragAndDrop: FC<IDragAndDropProps> = ({ children, newStyles }) => {
  const itemsRef = useRef<any>([]);
  const containersRef = useRef<any>([]);
  const [_state, _setState] = useState<IState>({
    dragToIndex: 0,
    dragFromIndex: 0,
    swap: false,
  });
  const state = useRef(_state);
  const setState = (data: IState) => {
    state.current = data;
    _setState(data);
  };

  const updateItemRefOrder = () => {
    containersRef.current.forEach((item: any, j: number) => {
      const tempItem = itemsRef.current[j];
      const currentItemIndex = itemsRef.current.indexOf(item.firstChild);
      // Swap item from current to correct
      itemsRef.current[j] = item.firstChild;
      itemsRef.current[currentItemIndex] = tempItem;
    });
  };

  useEffect(() => {
    children &&
      itemsRef.current.forEach((item: any, i: number) => {
        item.addEventListener("contextmenu", (e: Event) => {
          e.preventDefault();
          state.current.swap = !state.current.swap;
        });

        item.addEventListener("dragstart", () => {
          item.classList.add(
            cn({
              [newStyles?.dragging || ""]: newStyles?.dragging,
              [styles.dragging]: !newStyles?.dragging,
            })
          );
          state.current.dragFromIndex = containersRef.current.indexOf(
            containersRef.current.find((container: any) => {
              return container.firstChild.classList.contains(
                cn({
                  [newStyles?.dragging || ""]: newStyles?.dragging,
                  [styles.dragging]: !newStyles?.dragging,
                })
              );
            })
          );
        });

        item.addEventListener("dragend", () => {
          item.classList.remove(
            cn({
              [newStyles?.dragging || ""]: newStyles?.dragging,
              [styles.dragging]: !newStyles?.dragging,
            })
          );
          if (state.current.swap) {
            containersRef.current[
              state.current.dragToIndex
            ].firstChild.classList.remove(styles.selected);
            containersRef.current[state.current.dragFromIndex].append(
              containersRef.current[state.current.dragToIndex].firstChild
            );
            containersRef.current[state.current.dragToIndex].append(item);
            updateItemRefOrder();
          }
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsRef, children]);

  useEffect(() => {
    containersRef.current.forEach((container: any, dragToIndex: number) => {
      container.addEventListener("dragover", (e: Event) => {
        e.preventDefault();
        if (state.current.swap) {
          setState({
            ...state.current,
            dragToIndex: dragToIndex,
          });
          containersRef.current.forEach((container: any, index: number) => {
            if (index == dragToIndex) {
              container.firstChild.classList.add(
                cn({
                  [newStyles?.selected || ""]: newStyles?.selected,
                  [styles.selected]: !newStyles?.selected,
                })
              );
            } else {
              container.firstChild.classList.remove(
                cn({
                  [newStyles?.selected || ""]: newStyles?.selected,
                  [styles.selected]: !newStyles?.selected,
                })
              );
            }
          });
        } else {
          const dragElement = itemsRef.current.find((item: any) => {
            return item.classList.contains(
              cn({
                [newStyles?.dragging || ""]: newStyles?.dragging,
                [styles.dragging]: !newStyles?.dragging,
              })
            );
          });
          const dragFromContainer = containersRef.current.find((item: any) => {
            return item.firstChild.classList.contains(
              cn({
                [newStyles?.dragging || ""]: newStyles?.dragging,
                [styles.dragging]: !newStyles?.dragging,
              })
            );
          });

          container.append(dragElement);
          const dragFromIndex =
            containersRef.current.indexOf(dragFromContainer);
          if (dragFromIndex < dragToIndex) {
            // Move every between dragFromIndex and i to left
            containersRef.current.forEach((item: any, j: number) => {
              if (j > dragFromIndex && j <= dragToIndex) {
                containersRef.current[j - 1].append(itemsRef.current[j]);
              }
            });
          } else {
            // Move every between dragFromIndex and i to right
            containersRef.current.forEach((item: any, j: number) => {
              if (dragToIndex <= j && j < dragFromIndex) {
                containersRef.current[j + 1].append(itemsRef.current[j]);
              }
            });
          }
          // Update order of itemsRef
          updateItemRefOrder();
        }
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containersRef, children]);

  if (!children) return null;
  return (
    <div
      className={cn({
        [newStyles?.wrapper || ""]: newStyles?.wrapper,
        [styles.wrapper || ""]: !newStyles?.wrapper,
      })}
    >
      {children &&
        children.map((item: any, i: number) => {
          return (
            <div
              className={cn({
                [newStyles?.container || ""]: newStyles?.container,
                [styles.container]: !newStyles?.container,
              })}
              ref={(el) => (containersRef.current[i] = el)}
              key={item.id}
            >
              <div
                key={item.id}
                className={cn(styles.drag, {
                  [newStyles?.content || ""]: newStyles?.content,
                  [styles.content]: !newStyles?.content,
                })}
                ref={(el) => (itemsRef.current[i] = el)}
                draggable="true"
              >
                {item}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default DragAndDrop;
