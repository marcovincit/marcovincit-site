import styles from "./Grid.module.scss";

export default function Grid(props) {
  const { as, children } = props;
  const TagName = as ? as : "p";

  return <TagName className={styles.grid}>{children}</TagName>;
}
