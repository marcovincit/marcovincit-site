import styles from "./Page.module.scss";

export default function Page({ as, children, size, onePage, active, zIndex }) {
  const TagName = as ? as : "div";

  return (
    <TagName
      className={`${styles.container} ${onePage ? styles.onePage : ""} ${
        active ? styles.active : ""
      }`}
      style={{
        width: `${onePage ? (size / 3) * 2 : (size / 3) * 4}vh`,
        height: `${size}vh`,
        zIndex: zIndex,
      }}
    >
      {/* <div className= /> */}
      {children}
    </TagName>
  );
}
