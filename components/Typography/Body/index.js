import styles from "./Body.module.scss";
import classNames from "classnames";

export default function Body(props) {
  const { align, as, color, children, className, style } = props;
  const TagName = as ? as : "p";
  const classes = classNames(
    styles.Body,
    "Body",
    {
      [`text-${color}`]: color,
      [`text-${align}`]: align,
    },
    className
  );

  return (
    <TagName className={classes} style={style}>
      {children}
    </TagName>
  );
}
