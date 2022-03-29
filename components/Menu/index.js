import styles from "./Menu.module.scss";

import { motion, useReducedMotion } from "framer-motion";
import { easeInOutQuint } from "utils/easing";

function ActiveLink({ children, href, index }) {
  const shouldReduceMotion = useReducedMotion();
  console.log(index);

  return (
    <li>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0 : index / 2,
          delay: shouldReduceMotion ? 0 : 3,
          ease: easeInOutQuint,
        }}
        animate={{ opacity: 1 }}
      >
        <a href={href}>{children}</a>
      </motion.div>
    </li>
  );
}

export function Menu() {
  return (
    <menu className={styles.menu}>
      <ul>
        <ActiveLink href="#About" index={1}>
          <span>About</span>
        </ActiveLink>

        <ActiveLink href="#Experience" index={2}>
          <span>Experience</span>
        </ActiveLink>

        <ActiveLink href="#Press" index={3}>
          <span>Press</span>
        </ActiveLink>

        <ActiveLink href="#Projects" index={4}>
          <span>Side projects</span>
        </ActiveLink>

        <ActiveLink href="#Clients" index={5}>
          <span>Clients</span>
        </ActiveLink>

        <ActiveLink href="#Featured" index={6}>
          <span>Featured</span>
        </ActiveLink>
      </ul>
    </menu>
  );
}
