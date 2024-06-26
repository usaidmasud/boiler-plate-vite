import clsx from "clsx";
import { ReactNode } from "react";
import ButtonIcon from "./Button/ButtonIcon";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

interface BoxProps {
  className?: string;
  children: ReactNode;
}

function Box({ className, children }: BoxProps) {
  return (
    <div
      className={clsx(
        "bg-white rounded-lg shadow-lg overflow-hidden",
        className,
      )}
    >
      {children}
    </div>
  );
}

type PropsTitle = {
  title: string;
  extra?: ReactNode;
  className?: string;
  showBackButton?: boolean;
};
function PageHeader({ title, extra, className, showBackButton }: PropsTitle) {
  const navigate = useNavigate();
  return (
    <div
      className={clsx(
        "flex flex-col md:flex-row justify-between items-start py-2 mb-4",
        className,
      )}
    >
      <div className={clsx("inline-flex gap-1 items-center")}>
        {showBackButton && (
          <ButtonIcon
            onClick={() => navigate(-1)}
            icon={<ChevronLeftIcon className="w-5 h-5" />}
          />
        )}
        <h3 className="font-semibold text-lg font-mono">{title}</h3>
      </div>
      <div className="">{extra}</div>
    </div>
  );
}
Box.Title = PageHeader;
export default Box;
