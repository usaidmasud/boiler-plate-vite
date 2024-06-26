import { DefaultOptionType } from "@/utils/models/root.model";
import clsx from "clsx";
import React, { ReactNode } from "react";

type Props = {
  items: DefaultOptionType[];
  className?: string | ReactNode;
};
function CustomDescription({ items, className }: Props) {
  return (
    <ul className={clsx("flex flex-col gap-1", className)}>
      {items.map((item, index) => (
        <li key={index} className="flex flex-wrap gap-2">
          <span className="w-24 text-sm text-gray-600">{item.label}</span>
          <span className="text-gray-800 font-medium">:&nbsp;{item.value}</span>
        </li>
      ))}
    </ul>
  );
}

export default React.memo(CustomDescription);
