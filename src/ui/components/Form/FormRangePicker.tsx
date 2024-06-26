import { DatePicker } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import React from "react";

interface Props {
  allowClear?: boolean;
  value: [dayjs.Dayjs, dayjs.Dayjs];
  onChange: RangePickerProps["onChange"];
  picker?: "time" | "date" | "week" | "month" | "quarter" | "year";
  placeholder?: string;
  format?: string;
}

const { RangePicker } = DatePicker;

function FormRangePicker({ value, onChange, format = "DD-MM-YYYY" }: Props) {
  return <RangePicker format={format} value={value} onChange={onChange} />;
}

export default React.memo(FormRangePicker);
