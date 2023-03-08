import React, { useState } from "react";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import Logo from "../../assets/logo.jpeg";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import styles from "../Navbar/navbar.module.css";

const Navbar = () => {
  return (
    <section className={styles.navbar}>
      <img src={Logo} alt="logo" className={styles.logo} />
      {/* <div>
        <RiMenu4Line size={60} />
        <RiCloseLine size={60} />
      </div> */}

      <Navigation />
      <MobileNavigation />
    </section>
  );
};

export default Navbar;
