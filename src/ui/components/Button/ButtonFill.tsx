import clsx from "clsx";
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  color?: "red" | "green" | "default" | "blue";
};
function ButtonFill({ icon, children, color = "default", ...props }: Props) {
  return (
    <button
      {...props}
      className={clsx(
        "py-1 px-2 flex justify-center items-center shadow-md duration-200 ease-in-out transition rounded-lg focus:ring-2 font-normal text-xs",
        {
          "text-white bg-red-600 hover:bg-red-700 focus:ring-red-700":
            color === "red",
          "text-white bg-gray-600 hover:bg-gray-700 focus:ring-gray-700":
            color === "default",
          "text-white bg-green-600 hover:bg-green-700 focus:ring-green-700":
            color === "green",
          "text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-700":
            color === "blue",
        },
      )}
    >
      {icon ?? children}
    </button>
  );
}
export default React.memo(ButtonFill);
