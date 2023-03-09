import NavLinks from "./NavLinks";
import styles from "./navbar.module.css";
import React, { useState } from "react";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";

const MobileNavigation = () => {
  const [navbar, setNavbar] = useState(false);
  const hamburgerIcon = (
    <RiMenu4Line
      className={styles.hamburgerIcon}
      onClick={handleClick}
      size="2.5rem"
      color="white"
    />
  );

  const closeIcon = (
    <RiCloseLine
      className={styles.closeIcon}
      size="2.5rem"
      onClick={handleClick}
      color="white"
    />
  );
  function handleClick() {
    setNavbar((prevNavbar) => !prevNavbar);
    console.log(navbar);
  }
  return (
    <nav className={styles.MobileNavigation}>
      {navbar && <NavLinks />}
      {navbar ? closeIcon : hamburgerIcon}
    </nav>
  );
};

export default MobileNavigation;
