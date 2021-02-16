import styles from "./List.module.scss";

export default function List(props) {
  const { as, children, horizontal, join } = props;
  const TagName = as ? as : "ul";

  return (
    <TagName
      className={`${horizontal ? styles.horizontal : ""} ${
        join ? styles.join : ""
      } ${styles.list}`}
    >
      {children}
    </TagName>
  );
}
