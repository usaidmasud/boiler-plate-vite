import { Input, Skeleton } from "antd";
import { TextAreaProps } from "antd/es/input";
import React from "react";

interface Props extends TextAreaProps {
  activeSkeleton?: boolean;
}

const { TextArea } = Input;
function FormTextArea({ activeSkeleton, ...props }: Props) {
  if (activeSkeleton) {
    return <Skeleton.Input block active />;
  }
  return <TextArea {...props} />;
}

export default React.memo(FormTextArea);
