import isNull from "@/utils/helpers/isNull";
import { MapIcon } from "@heroicons/react/24/solid";
import ButtonIcon from "./ButtonIcon";
import React from "react";

type Props = {
  link: string;
};
function ButtonVirtualTour({ link }: Props) {
  if (!isNull(link)) {
    return (
      <a target="_blank" href={link}>
        <ButtonIcon
          color="blue"
          title="Virtual Tour"
          icon={<MapIcon className="w-4 h-4" />}
        />
      </a>
    );
  }
  return <></>;
}

export default React.memo(ButtonVirtualTour);
