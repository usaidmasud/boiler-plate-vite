import { DefaultOptionType } from "@/utils/models/root.model";
import { Radio, RadioProps, Skeleton } from "antd";
import React from "react";

interface Props extends RadioProps {
  options: DefaultOptionType[];
  activeSkeleton?: boolean;
}

function FormRadio({ options, activeSkeleton, ...props }: Props) {
  if (activeSkeleton) {
    return <Skeleton.Input block active />;
  }
  return (
    <Radio.Group {...props} buttonStyle="solid">
      {options.map((item, index) => (
        <Radio.Button key={index} value={item.value}>
          {item.label}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
}
export default React.memo(FormRadio);
