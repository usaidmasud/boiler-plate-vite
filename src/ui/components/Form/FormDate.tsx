import type { DatePickerProps } from "antd";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import React from "react";

interface Props {
  allowClear?: boolean;
  value: dayjs.Dayjs | null;
  onChange: DatePickerProps["onChange"];
  picker?: "time" | "date" | "week" | "month" | "quarter" | "year";
  placeholder?: string;
  format?: string;
}
function FormDate({
  allowClear = false,
  value,
  picker,
  onChange,
  format = "DD-MM-YYYY",
  placeholder = "Select Date",
}: Props) {
  return (
    <DatePicker
      value={value}
      onChange={onChange}
      picker={picker}
      placeholder={placeholder}
      allowClear={allowClear}
      format={format}
      style={{
        width: "100%",
      }}
    />
  );
}
export default React.memo(FormDate);
