import React from "react";
import NavLinks from "./NavLinks";
import styles from "./navbar.module.css";

const MobileNavigation = () => {
  return (
    <nav className={styles.MobileNavigation}>
      <NavLinks />
    </nav>
  );
};

export default MobileNavigation;
