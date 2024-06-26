import { InputNumber, InputNumberProps } from "antd";
import React from "react";

interface Props extends InputNumberProps {}
function FormNumber({ ...props }: Props) {
  return (
    <InputNumber
      addonBefore="IDR"
      formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      parser={(value) => value!.replace(/\$\s?|(,*)/g, "")}
      style={{
        width: "100%",
      }}
      {...props}
    />
  );
}

export default React.memo(FormNumber);
