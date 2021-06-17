import styles from "./Grid.module.scss";

export default function Grid(props) {
  const { as, children, col } = props;
  const TagName = as ? as : "div";

  return <TagName className={styles.grid}>{children}</TagName>;
}
