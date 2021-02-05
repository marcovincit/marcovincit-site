import styles from "./Body1.module.scss";
import classNames from "classnames";

export default function Body1(props) {
  const { align, as, color, children, className } = props;
  const TagName = as ? as : "p";
  const classes = classNames(
    styles.Body1,
    "Body1",
    {
      [`text-${color}`]: color,
      [`text-${align}`]: align,
    },
    className
  );

  return <TagName className={classes}>{children}</TagName>;
}
