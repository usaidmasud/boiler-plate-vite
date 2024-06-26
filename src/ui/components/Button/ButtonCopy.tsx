import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/solid";
import { Tooltip } from "antd";
import copy from "copy-to-clipboard";
import React from "react";
type Props = {
  value: string;
  tooltipText?: string;
};
function ButtonCopy({ value, tooltipText }: Props) {
  const [status, setStatus] = React.useState<boolean>(false);

  const handleCopy = (value: string) => {
    copy(value, {
      debug: true,
      message: "Press #{key} to copy",
    });
    setStatus(true),
      setTimeout(() => {
        setStatus(false);
      }, 3000);
  };
  return (
    <Tooltip
      title={status ? "Copied" : tooltipText ? tooltipText : "Copy Geojson"}
    >
      <button onClick={() => handleCopy(value)} className="">
        {!status && (
          <DocumentDuplicateIcon className="w-4 h-4 text-primary-main hover:cursor-pointer hover:text-primary-hover duration-300 transition shadow-md hover:scale-125" />
        )}
        {status && (
          <CheckIcon className="w-4 h-4 text-primary-main hover:cursor-pointer hover:text-primary-hover duration-300 transition shadow-md" />
        )}
      </button>
    </Tooltip>
  );
}

export default ButtonCopy;
