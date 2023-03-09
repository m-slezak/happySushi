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
      <img src={Logo} alt="logo" className={styles.logo} />
      <MobileNavigation />
      <Navigation />
    </nav>
  );
};

export default Navbar;
