import React from "react";
import styles from "../About/about.module.css";
import happySushi from "../../assets/happySushi.svg";

const About = () => {
  return (
    <section className={styles.about}>
      <img src={happySushi}></img>
    </section>
  );
};

export default About;
