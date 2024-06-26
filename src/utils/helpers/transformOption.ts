import { DefaultOptionType } from "antd/es/select";

export const transformOption = (
  obj: Array<object>,
  key: string,
  value: string,
) => {
  // Check if obj is an array and contains objects
  if (!Array.isArray(obj) || obj.length === 0 || typeof obj[0] !== "object") {
    return [];
  }

  const options: DefaultOptionType[] = obj.map((item: any) => ({
    value: item[key],
    label: item[value],
  }));
  return options;
};
