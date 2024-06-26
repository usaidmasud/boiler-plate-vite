import { Input, InputProps, Skeleton } from "antd";
import React from "react";

interface Props extends InputProps {
  inputRef?: any;
  activeSkeleton?: boolean;
}

function FormInput({ inputRef, activeSkeleton, ...props }: Props) {
  if (activeSkeleton) {
    return <Skeleton.Input block active />;
  }
  return <Input ref={inputRef} {...props} />;
}
export default React.memo(FormInput);
