import { TButtonSize, TButtonType } from "@/utils/models/root.model";
import clsx from "clsx";
import React from "react";
import "./styles/buttonPill.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonType?: TButtonType;
  size?: TButtonSize;
  children?: React.ReactNode;
  label?: string;
  block?: boolean;
};
function ButtonPill({
  buttonType = "primary",
  size = "base",
  label,
  children,
  block,
  ...rest
}: Props) {
  return (
    <button
      type="button"
      {...rest}
      className={clsx("btn", {
        "btn-primary": buttonType === "primary",
        "btn-basic": buttonType === "basic",
        "btn-delete": buttonType === "delete",
        "btn-secondary": buttonType === "secondary",
        "btn-base": size === "base",
        "btn-sm": size === "sm",
        "btn-lg": size === "lg",
        "w-full": block,
      })}
    >
      {label ?? children}
    </button>
  );
}

export default React.memo(ButtonPill);
