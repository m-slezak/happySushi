import React from "react";
import styles from "../Menu/menu.module.css";

const Menu = () => {
  return (
    <section className={styles.menu}>
      <h2>MENU</h2>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <a>Przystawki</a>
        </li>

        <li className={styles.menuItem}>
          <a>Zupy</a>
        </li>
        <li className={styles.menuItem}>
          <a>Rolki</a>
        </li>

        <li className={styles.menuItem}>
          <a>Dania</a>
        </li>
      </ul>
    </section>
  );
};

export default Menu;
