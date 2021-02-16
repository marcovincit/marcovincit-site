import styles from "./Cover.module.scss";
import Body from "components/Typography/Body";
import Grid from "components/Grid";
import Link from "next/link";

export default function Cover(props) {
  const { as, children, src, href } = props;
  const TagName = as ? as : "section";

  return (
    <Link href={href}>
      <a>
        <figure data-scroll-section className={styles.container}>
          <img className={styles.image} src="/works/cover.jpg" />
          <figcaption className={styles.caption}>
            <Grid>
              <div className={styles.title} data-scroll data-scroll-speed={0.5}>
                <Body>{children}</Body>
              </div>
            </Grid>
          </figcaption>
        </figure>
      </a>
    </Link>
  );
}
