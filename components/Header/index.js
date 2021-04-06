import styles from "./Header.module.scss";

import Link from "next/link";
import Grid from "components/Grid";
import Body from "components/Typography/Body";

import HoverLink from "components/HoverLink";

export default function Header({ about }) {
  return (
    <header className={styles.header}>
      <Grid>
        <div>
          <Body>
            <Link href="/">
              <a>
                Marco Vincit
                <br />
                Design & Development
              </a>
            </Link>
          </Body>
        </div>

        <div />

        <div>
          <Body>
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
          </Body>
        </div>

        <div>
          <Body align="right">
            <Link href="/about">
              <a>+</a>
            </Link>
          </Body>
        </div>
      </Grid>
    </header>
  );
}
