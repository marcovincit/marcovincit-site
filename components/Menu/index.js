import styles from "./Menu.module.scss";

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
        <ActiveLink href="#about">
          <span>About</span>
        </ActiveLink>

        <ActiveLink href="#experience">
          <span>Experience</span>
        </ActiveLink>

        <ActiveLink href="#press">
          <span>Press</span>
        </ActiveLink>

        <ActiveLink href="#publications">
          <span>Publications</span>
        </ActiveLink>

        <ActiveLink href="#projects">
          <span>Side projects</span>
        </ActiveLink>

        <ActiveLink href="#clients">
          <span>Clients</span>
        </ActiveLink>

        <ActiveLink href="#featured">
          <span>Featured</span>
        </ActiveLink>
      </ul>
    </menu>
  );
}
