import { Input, InputProps } from "antd";
import React from "react";

interface Props extends InputProps {}
function FormSearch({ ...props }: Props) {
  return <Input.Search {...props} />;
}

export default React.memo(FormSearch);
