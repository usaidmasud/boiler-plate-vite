import isNull from "./isNull";
import { renderCell } from "./renderCell";
export const currency = (money: number) => {
  if (isNull(money)) return renderCell(money);
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(money);
};

export const thousandFormat = (number: any) => {
  try {
    return number.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
  } catch (error) {
    /* empty */
  }
};
