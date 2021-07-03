import styles from "./Menu.module.scss";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";

import { motion } from "framer-motion";

import useWindowScroll from "utils/useWindowScroll";
import useWindowSize from "utils/useWindowSize";
import useCursorPosition from "utils/useCursorPosition";
import modulate from "utils/modulate";

export default function Menu() {
  const menu = useRef(null);

  const [menuTop, setMenuTop] = useState(0);
  const [menuHeight, setMenuHeight] = useState(0);

  const { windowScrollY } = useWindowScroll();
  const { windowWidth, windowHeight } = useWindowSize();
  const { cursorPositionY } = useCursorPosition();

  const [menuY, setMenuY] = useState(0);
  const [photoY, setPhotoY] = useState(0);

  useLayoutEffect(() => {
    const container = menu.current;

    setMenuTop(container.offsetTop);
    setMenuHeight(container.offsetHeight);
  }, [menu, windowWidth, windowHeight]);

  useEffect(() => {
    setMenuY(
      `-${modulate(
        cursorPositionY,
        [menuTop, windowHeight],
        [0, menuTop + menuHeight - windowHeight],
        true
      )}px`
    );
  }, [cursorPositionY]);

  return (
    <motion.menu
      ref={menu}
      className={styles.menu}
      animate={{ y: menuY }}
      transition={{ ease: "easeOut", duration: 0.6 }}
    >
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/experience">
            <a>Experience</a>
          </Link>
        </li>
        <li>
          <Link href="/press">
            <a>Press</a>
          </Link>
        </li>
        <li>
          <Link href="/publications">
            <a>Publications</a>
          </Link>
        </li>
        <li>
          <Link href="/side-projects">
            <a>Side projects</a>
          </Link>
        </li>
        <li>
          <Link href="/clients">
            <a>Clients</a>
          </Link>
        </li>
        <li>
          <Link href="/featured">
            <a>Featured</a>
          </Link>
        </li>
      </ul>
    </motion.menu>
  );
}
