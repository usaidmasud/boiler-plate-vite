import { TColor } from "@/utils/models/root.model";
import clsx from "clsx";
import React, { ReactNode } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: TColor;
  children: ReactNode;
  block?: boolean;
}
function BasicButton({ block, color = "default", children, ...props }: Props) {
  return (
    <button
      type="button"
      className={clsx(
        "px-4 py-1.5 text-sm rounded-lg shadow-lg transition-colors duration-300 focus:ring-2  border-0 cursor-pointer",
        {
          "w-full": block,
        },
        {
          "bg-primary-main  text-white hover:bg-primary-hover focus:ring-primary-light ":
            color === "primary",
        },
        {
          "bg-red-500  text-white hover:bg-red-600 focus:ring-red-200 ":
            color === "danger",
        },
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default React.memo(BasicButton);
