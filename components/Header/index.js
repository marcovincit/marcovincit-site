import styles from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.container}>
      <h1>
        <Link href="/">
          <a>Marco Vincit</a>
        </Link>
      </h1>
      <div className={styles.content}>
        <h2>
          <a target="_blank" href="https://www.google.com/search?q=design">
            Design & Development
          </a>
        </h2>
        <h3>
          <a
            target="_blank"
            href="https://www.google.com/search?q=S%C3%A3o+Paulo%2C+SP"
          >
            São Paulo, Brazil
          </a>
        </h3>
      </div>
    </header>
  );
}
