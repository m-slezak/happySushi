import React from "react";
import styles from "./navbar.module.css";
import NavLinks from "./NavLinks";

const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <NavLinks />
    </nav>
  );
};

export default Navigation;
