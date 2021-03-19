import styles from "./WorkList.module.scss";
import Link from "next/link";
import Grid from "components/Grid";
import Body from "components/Typography/Body";
import HoverLink from "components/HoverLink";

export default function WorkList({ data }) {
  return (
    <ul className={styles.list}>
      {data.map(({ name, date, type, link, cover }, key) => (
        <li
          key={key}
          data-scroll
          // data-scroll-speed={1}
          data-scroll-delay={`${1 * key}`}
          data-scroll-position="top"
          className={styles.item}
        >
          <Link href={link}>
            <a className={styles.link}>
              <Grid>
                <Body as="span" className={styles.name}>
                  <HoverLink label={name} />
                </Body>
                <Body as="span" />
                <Body as="span" className={styles.type}>
                  {type}
                </Body>
                <Body as="span" className={styles.date}>
                  <span>{date}</span>
                  <span className={styles.arrow}>→</span>
                </Body>
              </Grid>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
