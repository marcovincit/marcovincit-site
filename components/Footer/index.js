import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.container}>
      <h2><a
        target="_blank"
        rel="noreferrer"
        href="https://en.wikipedia.org/wiki/2008"
      >
        Est. 2008
      </a></h2>
      <h2 className={styles.item2}>
        <a
          className="hide-xs"
          target="_blank"
          rel="noreferrer"
          href="https://en.wikipedia.org/wiki/Jan_Tschichold"
        >
          Vielen Dank Herr Tschichold
        </a>
        
        </h2>
        
        <h2 className={styles.item3}>
        <a href="mailto:hi@marcovincit.com">hi@marcovincit.com</a>
      </h2>
    </footer>
  );
}
