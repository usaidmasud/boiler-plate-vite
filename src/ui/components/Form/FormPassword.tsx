import { Input, InputProps } from "antd";
import React from "react";

interface Props extends InputProps {}
function FormPassword({ ...props }: Props) {
  return <Input.Password {...props} />;
}

export default React.memo(FormPassword);
