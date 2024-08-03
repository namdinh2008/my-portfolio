import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nam</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 3 years of experience using HTML & CSS, React and
          Java. Reach out if you'd like to learn more!
        </p>
        <div className={styles.warpbox}>
          <a href="mailto:myemail@email.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a href="mailto:derricrane@gmail.com" className={styles.contactBtn}>
            Contact Me
        </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
