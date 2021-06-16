import styles from "./Header.module.scss";

import Link from "next/link";
import Grid from "components/Grid";
import Body from "components/Typography/Body";

import HoverLink from "components/HoverLink";

export default function Header({ about }) {
  return (
    <>
      <div>
        <Link href="/">
          <a>
            Marco Vincit
            <br />
            Design & Development
          </a>
        </Link>
      </div>

      <div>
        {about ? (
          <Link href="/about">
            <a className={styles.link}>
              <HoverLink label="About" />
            </a>
          </Link>
        ) : (
          <Link href="/works">
            <a className={styles.link}>
              <HoverLink label="Works" />
            </a>
          </Link>
        )}
      </div>

      <div>
        <Link href="/about">
          <a>+</a>
        </Link>
      </div>
    </>
  );
}
