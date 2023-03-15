import React from "react";
import { motion } from "framer-motion";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <ul>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        onClick={props.handleClick}
      >
        O NAS
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        onClick={props.handleClick}
      >
        MENU
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.3 }}
        onClick={props.handleClick}
      >
        KONTAKT
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.4 }}
        onClick={props.handleClick}
      >
        AKTUALNOŚCI
      </motion.li>
    </ul>
  );
};

export default NavLinks;
