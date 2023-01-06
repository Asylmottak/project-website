import React, { useState, useEffect, FC, useRef } from "react";
import cn from "classnames";
import styles from "@/styles/components/steven/SidebarPage.module.scss";

interface ISidebarPage {
  items: {
    title?: string;
    render: JSX.Element;
  }[];
}

const SidebarPage: FC<ISidebarPage> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const itemRefs = useRef<(null | HTMLDivElement)[]>([]);
  const scrollRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const itemTopPos = itemRefs.current
        .slice(
          0,
          itemRefs.current.findIndex((i) => i === null)
        )
        .map((e) => e?.getBoundingClientRect().top);

      const closestToZeroIndex = itemTopPos.indexOf(
        itemTopPos.reduce((acc, x) => {
          if (acc === undefined || x === undefined) return x;
          return x === 0
            ? x
            : x > 0 && x <= Math.abs(acc)
            ? x
            : x < 0 && -x < Math.abs(acc)
            ? x
            : acc;
        }, Infinity)
      );
      setActiveIndex(closestToZeroIndex);
    };
    const current = scrollRef.current;
    current?.addEventListener("scroll", handleScroll);

    return () => {
      current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (index: number) => {
    itemRefs?.current?.at(index)?.scrollIntoView();
    setActiveIndex(index);
  };

  if (!items) return <></>;
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <div className={styles.sidebar_content}>
          {items.map((item, index) => (
            <div
              className={cn([styles.item], {
                [styles.active]: index === activeIndex,
              })}
              onClick={() => handleClick(index)}
              key={index}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.content} ref={scrollRef}>
        {items.map((item, index) => (
          <div
            className={styles.item}
            ref={(element) => itemRefs?.current?.push(element)}
            key={index}
          >
            <h1 className={styles.itemTitle}>{item.title}</h1>
            <div className={styles.itemBreak} />
            <div className={styles.itemContent}>{item.render}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SidebarPage;
