import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.container}>
      <h1>
        <a>Marco Vincit</a>
      </h1>
      <div className={styles.content}>
        <h2>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/search?q=design"
          >
            Design & Development
          </a>
        </h2>

        <a
          className="hide-xs"
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/search?q=S%C3%A3o+Paulo%2C+SP"
        >
          São Paulo, Brazil
        </a>
      </div>
    </header>
  );
}
