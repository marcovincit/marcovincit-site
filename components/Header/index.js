import styles from "./Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSite } from "context";

export default function Header() {
  const { setPageState } = useSite();
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");

    setPageState({});
  };

  return (
    <header className={styles.container}>
      <h1>
        <a onClick={handleClick}>Marco Vincit</a>
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
        <h3 className="hide-xs">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/search?q=S%C3%A3o+Paulo%2C+SP"
          >
            São Paulo, Brazil
          </a>
        </h3>
      </div>
    </header>
  );
}
