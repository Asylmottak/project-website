import { FC, useRef, useState, useEffect } from "react";
import styles from "@/styles/components/cards/FadeInCard.module.scss";

interface IFadeInCardProps {
  children: JSX.Element;
}

/**
 * FadeInCard component
 * @prop {JSX.Element}  children  - The content of the card
 * @return {JSX.Element}          - The JSX code for FadeInCard component
 */
const FadeInCard: FC<IFadeInCardProps> = ({ children }): JSX.Element => {
  const [doFade, setDoFade] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleFade = () => {
    // Set fade if bottom of screen at bottom of card
    if (ref && ref.current)
      setDoFade(
        window.pageYOffset + window.innerHeight >
          ref?.current?.offsetTop + ref?.current?.clientHeight
      );
  };

  useEffect(() => {
    // Only do the fade once
    !doFade && window.addEventListener("scroll", handleFade, { passive: true });
    doFade && window.removeEventListener("scroll", handleFade);

    // Clean up when component unmount
    return () => window.removeEventListener("scroll", handleFade);
  }, [doFade]);

  return (
    <div
      ref={ref}
      className={doFade ? styles.fade : styles.hidden}
      onLoad={handleFade}
    >
      {children}
    </div>
  );
};

export default FadeInCard;
