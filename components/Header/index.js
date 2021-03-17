import styles from "./Header.module.scss";

import Link from "next/link";
import Grid from "components/Grid";
import Body from "components/Typography/Body";

import HoverLink from "components/HoverLink";

export default function Header({ about }) {
  return (
    <header data-scroll-section>
      <Grid>
        <div
          data-scroll
          data-scroll-speed={8}
          data-scroll-position="top"
          data-scroll-delay={0.1}
        >
          <Body>
            <Link href="/">Marco Vincit</Link>
          </Body>
        </div>

        <div />

        <div
          data-scroll
          data-scroll-speed={8}
          data-scroll-position="top"
          data-scroll-delay={0.1}
        >
          <Body>
            Just a designer <br /> who loves code <br /> and music.
          </Body>
        </div>

        <div
          data-scroll
          data-scroll-speed={8}
          data-scroll-position="top"
          data-scroll-delay={0.1}
        >
          <Body>
            {about ? (
              <Link href="/about">
                <a className={styles.link}>
                  <HoverLink label="About" />
                </a>
              </Link>
            ) : (
              <Link href="/works">
                <a className={styles.link}>Works</a>
              </Link>
            )}
          </Body>
        </div>
      </Grid>
    </header>
  );
}
