import styles from "./Container.module.scss";

export default function Container(props) {
  const { as, children } = props;
  const TagName = as ? as : "div";

  return <TagName className={styles.container}>{children}</TagName>;
}
