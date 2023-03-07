import React, { useState } from "react";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import styles from "../Navbar/navbar.module.css";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  function toggleSet() {
    setNavbar((oldNavbar) => !oldNavbar);
  }

  return (
    <section className={styles.navbar}>
      <h1> LOGO</h1>
      <RiMenu4Line size={60} />
      <RiCloseLine size={60} />
      <ul className={!navbar ? "styles.hidden" : "styles.shown"}>
        <li>O nas</li>
        <li>Menu</li>
        <li>Kontakt</li>
        <li>Aktualności</li>
      </ul>
    </section>
  );
};

export default Navbar;
