import styles from "./Photo.module.scss";

import Grid from "components/Grid";

export default function Photo() {
  return (
    <div className={styles.image}>
      <br />
      <img
        data-scroll
        data-scroll-speed={0.5}
        data-scroll-position="top"
        data-scroll-delay={0.5}
        src="./photo.jpg"
      />
    </div>
  );
}
