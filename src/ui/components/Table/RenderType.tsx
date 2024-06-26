import clsx from "clsx";

type Props = {
  type: "independen" | "interdependen" | "null";
};
export default function RenderType({ type }: Props) {
  if (type === "null") return "-";
  return (
    <p className="flex items-center gap-1">
      <span
        className={clsx("w-3 h-3 rounded-full", {
          "bg-secondary-main": type === "independen",
          "bg-primary-main": type === "interdependen",
        })}
      ></span>
      {type}
    </p>
  );
}
