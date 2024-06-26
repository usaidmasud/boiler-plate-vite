import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  title: string;
  children?: ReactNode;
  description?: string;
  className?: string;
};
export default function HeroBanner({
  title,
  children,
  className,
  description,
}: Props) {
  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url('/river.jpg')`,
      }}
      className={clsx(
        "bg-cover  bg-center w-full text-center bg-gray-200 py-24 relative px-6 md:px-28",
        className,
      )}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity (last value) as needed
        }}
      />
      <div className="text-white relative z-10 ">
        <h2 className="font-mono font-bold text-2xl md:text-4xl tracking-widest uppercase">
          {title}
        </h2>
        <div className="text-base mt-4 px-0 md:px-24 leading-snug">
          {description ?? children}
        </div>
      </div>
    </div>
  );
}
