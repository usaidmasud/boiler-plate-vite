import isNull from "./isNull";

export const renderCell = (value: string | null | number) => {
  return isNull(value) || value === "null" ? "-" : value;
};
