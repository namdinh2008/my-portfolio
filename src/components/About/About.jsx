import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Skilled in creating dynamic and responsive web applications using React, Angular, and Vue.js. Experienced in working with RESTful APIs, AJAX, and JSON.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Proficient in building server-side applications using Node.js, Express, Django, and Flask. Experienced in designing and implementing RESTful APIs and working with databases.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Development</h3>
              <p>
                Competent in full-stack development with the ability to handle both front-end and back-end development tasks. Experienced in integrating various technologies to create complete web applications.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
