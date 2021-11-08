import { FC, useEffect, useRef, CSSProperties } from "react";

import styles from "@/styles/components/frithjof/Clock.module.scss";

interface IClockProps {
  size: number;
  style?: CSSProperties;
}

/**
 * Clock component functioning with real time updates
 * @prop {number}         size  - The size of the clock in pixels in width & height
 * @prop {CSSProperties}  style - Option custom styles
 * @return {JSX.Element}        - The JSX code for Clock component
 */
const Clock: FC<IClockProps> = ({ size, style }): JSX.Element => {
  const hr = useRef<any>(null);
  const mn = useRef<any>(null);
  const sc = useRef<any>(null);

  /**
   * useEffect for animating clock according to time
   */
  useEffect(() => {
    // Instantiate interval variable for setting and clearing interval
    let interval: any;

    // Check if references has been assigned to element
    if (hr.current && mn.current && sc.current) {
      // Create interval for moving clock according to current time
      interval = setInterval(() => {
        // Set date time variables to current time
        const day = new Date();
        const hh = day.getHours() * 30; // Convert hours to 360 deg
        const mm = day.getMinutes() * 6; // Convert minutes to 360 deg
        const ss = day.getSeconds() * 6; // Convert seconds to 360 deg

        // Rotate clock according to time
        hr.current.style.transform = `rotateZ(${hh + mm / 12}deg)`;
        mn.current.style.transform = `rotateZ(${mm}deg)`;
        sc.current.style.transform = `rotateZ(${ss}deg)`;
      }, 1000);
    }

    // Clearn interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, [hr, mn, sc]);

  return (
    <div
      className={styles.clock}
      style={{ ...style, height: `${size}px`, width: `${size}px` }}
    >
      <div className={styles.hour} style={{ height: `${size / 2.5}px` }}>
        <div
          className={styles.hr}
          ref={hr}
          style={{ height: `${size / 2.5}px` }}
        ></div>
      </div>
      <div className={styles.min} style={{ height: `${size / 1.9}px` }}>
        <div
          className={styles.mn}
          ref={mn}
          style={{ height: `${size / 1.9}px` }}
        ></div>
      </div>
      <div className={styles.sec} style={{ height: `${size / 1.5}px` }}>
        <div
          className={styles.sc}
          ref={sc}
          style={{ height: `${size / 1.5}px` }}
        ></div>
      </div>
    </div>
  );
};

export default Clock;
