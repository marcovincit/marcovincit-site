import styles from "./List.module.scss";

export default function List(props) {
  const { as, children, horizontal } = props;
  const TagName = as ? as : "ul";

  return (
    <TagName
      className={`${horizontal ? styles.horizontal : ""} ${styles.list}`}
    >
      {children}
    </TagName>
  );
}
