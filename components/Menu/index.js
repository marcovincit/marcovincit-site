import styles from "./Menu.module.scss";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { motion } from "framer-motion";

import useWindowSize from "utils/useWindowSize";

import useCursorPosition from "utils/useCursorPosition";
import modulate from "utils/modulate";

import { useSite } from "context";

function ActiveLink({ children, href }) {
  const router = useRouter();
  const slug = href.slice(1);

  const [number, setNumber] = useState(300);

  const style = {
    marginRight: 10,
    pointerEvents: router.asPath === href ? "none" : "inherit",
  };

  const { pageState, setPageState, pageZIndex, setPageZIndex } = useSite();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);

    setNumber(number + 1);

    setPageState({ ...pageState, [slug]: true });
  };

  useEffect(() => {
    setPageZIndex({ ...pageZIndex, [slug]: number });
  }, [number]);

  return (
    <li>
      <a href={href} onClick={handleClick}>
        {children}
      </a>
    </li>
  );
}

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
        <ActiveLink href="/about">
          <span>About</span>
        </ActiveLink>

        <ActiveLink href="/experience">
          <span>Experience</span>
        </ActiveLink>

        <ActiveLink href="/press">
          <span>Press</span>
        </ActiveLink>

        <ActiveLink href="/publications">
          <span>Publications</span>
        </ActiveLink>

        <ActiveLink href="/projects">
          <span>Side projects</span>
        </ActiveLink>

        <ActiveLink href="/clients">
          <span>Clients</span>
        </ActiveLink>

        <ActiveLink href="/featured">
          <span>Featured</span>
        </ActiveLink>
      </ul>
    </motion.menu>
  );
}
