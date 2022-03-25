import styles from "./Menu.module.scss";
import data from "data/about";

function ActiveLink({ children, href }) {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
}

export function Menu() {
  return (
    <menu className={styles.menu}>
      <ul>

        <ActiveLink href="#About">
          <span>About</span>
        </ActiveLink>

        <ActiveLink href="#Experience">
          <span>Experience</span>
        </ActiveLink>

        <ActiveLink href="#Press">
          <span>Press</span>
        </ActiveLink>

        <ActiveLink href="#Projects">
          <span>Side projects</span>
        </ActiveLink>

        <ActiveLink href="#Clients">
          <span>Clients</span>
        </ActiveLink>

        <ActiveLink href="#Featured">
          <span>Featured</span>
        </ActiveLink>
      </ul>
    </menu>
  );
}
