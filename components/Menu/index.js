import styles from "./Menu.module.scss";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { motion } from "framer-motion";

import useWindowSize from "utils/useWindowSize";

import useCursorPosition from "utils/useCursorPosition";
import modulate from "utils/modulate";

export default function Menu() {
  // router
  const router = useRouter();
  const { slug } = router.query;

  //
  const menu = useRef(null);

  const [menuTop, setMenuTop] = useState(0);
  const [menuHeight, setMenuHeight] = useState(0);

  const { windowWidth, windowHeight } = useWindowSize();

  const { cursorPositionY } = useCursorPosition();

  const [menuY, setMenuY] = useState(0);

  useEffect(() => {
    const container = menu.current;

    setMenuTop(container.offsetTop);
    setMenuHeight(container.offsetHeight);
  }, [menu, windowWidth, windowHeight]);

  useEffect(() => {
    setMenuY(
      windowWidth > 1100
        ? `-${modulate(
            cursorPositionY,
            [menuTop, windowHeight],
            [0, menuTop + menuHeight - windowHeight],
            true
          )}px`
        : 0
    );
  }, [cursorPositionY, windowWidth, windowHeight]);

  return (
    <motion.menu
      ref={menu}
      className={`${styles.menu} ${slug ? styles.menuMin : ""} `}
      animate={{ y: menuY }}
      transition={{ ease: "easeOut", duration: 0.6 }}
    >
      <ul>
        <li>
          <Link href="/about">
            <a>
              <span>About</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/experience">
            <a>
              <span>Experience</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/press">
            <a>
              <span>Press</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/publications">
            <a>
              <span>Publications</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>
              <span>Side projects</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/clients">
            <a>
              <span>Clients</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/featured">
            <a>
              <span>Featured</span>
            </a>
          </Link>
        </li>
      </ul>
    </motion.menu>
  );
}
