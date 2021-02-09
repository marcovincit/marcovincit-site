import styles from "./List.module.scss";

export default function List(props) {
  const { as, children } = props;
  const TagName = as ? as : "ul";

  return <TagName className={styles.list}>{children}</TagName>;
}
