import styles from "./Photo.module.scss";

import Grid from "components/Grid";

export default function Photo() {
  return (
    <section data-scroll-section className={styles.container}>
      <Grid>
        <div className={styles.image}>
          <img
            data-scroll
            data-scroll-speed={3}
            data-scroll-position="top"
            data-scroll-delay={0.5}
            src="./photo.jpg"
          />
        </div>
      </Grid>
    </section>
  );
}
