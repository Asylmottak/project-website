import { FC, useEffect, useRef } from "react";

import styles from "@/styles/components/frithjof/Carousel.module.scss";
import React from "react";

interface ICarouselProps {
  children: JSX.Element[];
}

/**
 * Carousel component
 * @return {JSX.Element} - The JSX code for Carousel component
 */
const Carousel: FC<ICarouselProps> = ({ children }): JSX.Element => {
  const nav = useRef<any>(null);
  const slider = useRef<any>(null);

  /**
   * Handles scroll to target slide in carousel
   * @param {HTMLUListElement}  slider  - The slider referene
   * @param {HTMLLIElement}     current - The current slide
   * @param {HTMLLIElement}     target  - The slide to scroll into
   */
  const moveSlide = (
    slider: HTMLUListElement,
    current: HTMLLIElement,
    target: HTMLLIElement
  ): void => {
    const amountToMove = target.style.left;
    slider.style.transform = `translateX(-${amountToMove})`;
    current.classList.remove(styles.activeSlide);
    target.classList.add(styles.activeSlide);
  };

  /**
   * Updates active dot
   * @param {HTMLLIElement} current - The current dot
   * @param {HTMLLIElement} target  - The dot to move into
   */
  const moveDot = (current: HTMLLIElement, target: HTMLLIElement): void => {
    current.classList.remove(styles.activeSlide);
    target.classList.add(styles.activeSlide);
  };

  /**
   * Handles scroll to next element in carousel
   */
  const handleNext = (): void => {
    // Check if slider reference has been set
    if (slider.current) {
      // Fetch relevant HTML elements
      const currentSlide: HTMLLIElement = slider.current.querySelector(
        `.${styles.activeSlide}`
      );
      const nextSlide: any = currentSlide.nextElementSibling;
      const currentDot = nav.current.querySelector(`.${styles.activeSlide}`);
      const nextDot = currentDot.nextElementSibling;

      // Check if current- and next slide exist
      if (currentSlide && nextSlide !== null) {
        moveSlide(slider.current, currentSlide, nextSlide);
        moveDot(currentDot, nextDot);
      }
    }
  };

  /**
   * Handles scroll to previous element in carousel
   */
  const handlePrev = (): void => {
    // Check if slider reference has been set
    if (slider.current) {
      const currentSlide = slider.current.querySelector(
        `.${styles.activeSlide}`
      );
      const prevSlide = currentSlide.previousElementSibling;
      const currentDot = nav.current.querySelector(`.${styles.activeSlide}`);
      const prevDot = currentDot.previousElementSibling;

      // Check if current- and previous slide exist
      if (currentSlide && prevSlide !== null) {
        moveSlide(slider.current, currentSlide, prevSlide);
        moveDot(currentDot, prevDot);
      }
    }
  };

  /**
   * Handles nav click
   * @param {MouseEvent} e - The mouse click event
   */
  const handleNav = (e: React.MouseEvent<HTMLDivElement>): void => {
    // Cancel function if no dot was clicked
    if (e.target === nav.current) return;

    // Fetch all relevant elements
    const dots = nav.current.children;
    const slides = slider.current.children;

    // Loop through all dots to find which dot was clicked
    for (let i = 0; i < dots.length; i++) {
      // Check if dot is equal to the dot clicked
      if (dots[i] === e.target) {
        // Fetch relevant elements when target index is found
        const targetIndex = i;
        const targetDot = dots[i];
        const targetSlide = slides[targetIndex];
        const currentDot = nav.current.querySelector(`.${styles.activeSlide}`);
        const currentSlide = slider.current.querySelector(
          `.${styles.activeSlide}`
        );

        // Move slide & dot
        moveSlide(slider.current, currentSlide, targetSlide);
        moveDot(currentDot, targetDot);
      }
    }
  };

  /**
   * Positions all slides relative to eachother
   * Activates activeSlider class to first element in list
   */
  useEffect(() => {
    if (slider.current && nav.current) {
      const slides = slider.current.children;
      const dots = nav.current.children;

      // Loop through all slides, and set relative positions
      for (let i = 0; i < slides.length; i++) {
        const slideWidth = slides[i].getBoundingClientRect().width;
        slides[i].style.left = `${slideWidth * i}px`;
      }

      // Activate first slide on slider & nav
      slides[0].classList.add(styles.activeSlide);
      dots[0].classList.add(styles.activeSlide);
    }
  }, [slider, nav]);

  return (
    <div className={styles.carousel}>
      <button className={styles.button} onClick={handlePrev}>
        prev
      </button>
      <div className={styles.sliderContainer}>
        <ul className={styles.slider} ref={slider}>
          {children.map((child, index) => (
            <li className={styles.slide} key={index}>
              {child}
            </li>
          ))}
        </ul>
      </div>
      <button className={styles.button} onClick={handleNext}>
        next
      </button>
      <div className={styles.nav} ref={nav} onClick={(e) => handleNav(e)}>
        {children.map((child, index) => (
          <button className={styles.navDot} key={index}></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
