import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.container}>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://en.wikipedia.org/wiki/2008"
      >
        Est. 2008
      </a>
      <div className={styles.content}>
        <a
          className="hide-xs"
          target="_blank"
          rel="noreferrer"
          href="https://en.wikipedia.org/wiki/Jan_Tschichold"
        >
          Vielen Dank Herr Tschichold
        </a>
        <a href="mailto:hi@marcovincit.com">hi@marcovincit.com</a>
      </div>
    </footer>
  );
}
