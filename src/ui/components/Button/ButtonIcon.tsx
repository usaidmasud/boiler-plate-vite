import clsx from "clsx";
import React from "react";
import "./styles/buttonIcon.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  color?: "red" | "green" | "default" | "blue" | "violet" | "yellow";
  colorType?: "primary" | "default";
};
function ButtonIcon({
  icon,
  children,
  colorType,
  color = "default",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={clsx("btn", {
        "btn-red": color === "red",
        "btn-default": color === "default",
        "btn-default btn-primary":
          color === "default" && colorType === "primary",
        "btn-green": color === "green",
        "btn-blue": color === "blue",
        "btn-violet": color === "violet",
        "btn-yellow": color === "yellow",
      })}
    >
      {icon ?? children}
    </button>
  );
}

export default React.memo(ButtonIcon);
