import { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  children?: ReactNode;
};
function TooltipContent({ title, description }: Props) {
  return (
    <div>
      <h5 className="text-sm font-semibold">{title}</h5>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
}

export default TooltipContent;
