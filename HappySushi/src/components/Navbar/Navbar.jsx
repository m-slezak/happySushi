import React from "react";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import Logo from "../../assets/logo.jpeg";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import styles from "../Navbar/navbar.module.css";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="logo" className={styles.logo} />
        <p className={styles.logoWriting}>Happy Sushi</p>
      </div>

      <p></p>
      <MobileNavigation />
      <Navigation />
    </nav>
  );
};

export default Navbar;
