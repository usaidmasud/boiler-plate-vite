import { Select, SelectProps, Skeleton } from "antd";
import React from "react";

interface Props extends SelectProps {
  error?: boolean;
  errorMessage?: string;
  activeSkeleton?: boolean;
}
function FormSelect({ error, errorMessage, activeSkeleton, ...props }: Props) {
  const filterOption = (
    input: string,
    option?: { label: string; value: string },
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  if (activeSkeleton) {
    return <Skeleton.Input block active />;
  }
  return (
    <Select
      showSearch
      optionFilterProp="children"
      filterOption={filterOption as any}
      style={{
        width: "100%",
      }}
      {...props}
    />
  );
}

export default React.memo(FormSelect);
