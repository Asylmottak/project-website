import { FC } from "react";

// import Button from "@/components/Button";

import styles from "@/styles/pages/steven/Steven.module.scss";
// import UtilFunctions from "@/utils/functions";
import Navbar from "@/components/steven/Navbar";
// import HoverCard from "@/components/cards/HoverCard";

/**
 * Steven's main page
 * @return {JSX.Element} - The JSX code for Steven's page
 */
const Steven: FC = (): JSX.Element => {
  return (
    <div className={styles.steven}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Hi! I am Steven</h1>
          <p>
            I am a 4th year student, currently studying Computer Science at
            Norwegian University of Science and Technology (NTNU), with
            previously completed 5 semesters of Electronics Systems Design and
            Innovation. In addition I have some experience with both Web
            Development (full stack development using React, TypeScript and
            GraphQL) and Game Development (using Unity) through personal
            projects.
          </p>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src="/steven/home.jpg" alt="card" />
            <h2>Project #1</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquam dolor eget ex aliquam cursus. Duis nulla purus, facilisis
              a urna eget, accumsan viverra orci. Donec fringilla ex non mauris
              egestas, ac ultrices nisl tincidunt. Morbi posuere ex molestie
              odio rutrum facilisis. Mauris sit amet blandit eros. Nullam
              molestie purus.
            </p>
          </div>
          <div className={styles.card}>
            <img src="/steven/home.jpg" alt="card" />
            <h2>Project #2</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquam dolor eget ex aliquam cursus. Duis nulla purus, facilisis
              a urna eget, accumsan viverra orci. Donec fringilla ex non mauris
              egestas, ac ultrices nisl tincidunt. Morbi posuere ex molestie
              odio rutrum facilisis. Mauris sit amet blandit eros. Nullam
              molestie purus.
            </p>
          </div>
          <div className={styles.card}>
            <img src="/steven/home.jpg" alt="card" />
            <h2>Project #3</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquam dolor eget ex aliquam cursus. Duis nulla purus, facilisis
              a urna eget, accumsan viverra orci. Donec fringilla ex non mauris
              egestas, ac ultrices nisl tincidunt. Morbi posuere ex molestie
              odio rutrum facilisis. Mauris sit amet blandit eros. Nullam
              molestie purus.
            </p>
          </div>
          <div className={styles.card}>
            <img src="/steven/home.jpg" alt="card" />
            <h2>Project #4</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquam dolor eget ex aliquam cursus. Duis nulla purus, facilisis
              a urna eget, accumsan viverra orci. Donec fringilla ex non mauris
              egestas, ac ultrices nisl tincidunt. Morbi posuere ex molestie
              odio rutrum facilisis. Mauris sit amet blandit eros. Nullam
              molestie purus.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.background} />
    </div>
  );
};

export default Steven;
