import styles from "./Photo.module.scss";

export default function Photo() {
  return (
    <section data-scroll-section className={styles.container}>
      <img
        data-scroll
        data-scroll-speed={3}
        data-scroll-position="top"
        data-scroll-delay={0.5}
        className={styles.image}
        src="./photo.jpg"
      />
    </section>
  );
}
