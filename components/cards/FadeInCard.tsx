import { FC, useRef, useState, useEffect } from "react";
import styles from "@/styles/components/cards/FadeInCard.module.scss";

interface IFadeInCardProps {
  children: JSX.Element;
  containerRef?: React.MutableRefObject<any>;
}

/**
 * FadeInCard component
 * @prop {JSX.Element}  children  - The content of the card
 * @prop {MutableRefObject}  containerRef  - A ref to the scrollable container
 * @return {JSX.Element}          - The JSX code for FadeInCard component
 */
const FadeInCard: FC<IFadeInCardProps> = ({
  children,
  containerRef,
}): JSX.Element => {
  const [doFade, setDoFade] = useState(false);
  const ref = useRef<any>(null);

  const handleFade = () => {
    // Set fade if bottom of screen at bottom of card
    if (ref && ref.current) {
      if (containerRef?.current) {
        const cardPosFromTop =
          ref?.current?.offsetTop - containerRef?.current?.offsetTop;
        const scrollPos =
          containerRef?.current?.scrollTop + containerRef?.current.clientHeight;
        // Set fade if bottom of screen at bottom of card
        setDoFade(scrollPos > cardPosFromTop);
      } else {
        setDoFade(
          window.pageYOffset + window.innerHeight >
            ref?.current?.offsetTop + ref?.current?.clientHeight
        );
      }
    }
  };

  useEffect(() => {
    // Only do the fade once
    const container = containerRef?.current;
    if (container) {
      !doFade &&
        container.addEventListener("scroll", handleFade, {
          passive: true,
        });
      doFade && container.removeEventListener("scroll", handleFade);

      // Clean up when component unmount
      return () => container.removeEventListener("scroll", handleFade);
    } else {
      !doFade &&
        window.addEventListener("scroll", handleFade, {
          passive: true,
        });
      doFade && window.removeEventListener("scroll", handleFade);

      // Clean up when component unmount
      return () => window.removeEventListener("scroll", handleFade);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doFade]);

  return (
    <div
      ref={ref}
      className={doFade ? styles.fade : styles.hidden}
      // onLoad={handleFade}
    >
      {children}
    </div>
  );
};

export default FadeInCard;
