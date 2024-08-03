import React from "react";

import styles from "./Education.module.css";

import education from "../../data/education.json";
import { EducationCards } from "./EducationCards";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>SCHOOLS</h2>
      <div className={styles.projects}>
        {education.map((project, id) => {
          return <EducationCards key={id} project={project} />;
        })}
      </div>
    </section>
  );
};