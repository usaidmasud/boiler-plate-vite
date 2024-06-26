import dayjs from "dayjs";
import id from "dayjs/locale/id";
export const enum FORMAT_DATE {
  SERVER = "YYYY-MM-DD",
  LOCAL = "DD-MM-YYYY",
  TIME = "HH:mm:ss",
  SHORTTIME = "HH:mm",
  DATE = "DD MMM YYYY",
  DATETIME = "DD-MM-YYYY HH:mm:ss",
}

export function formatDate(
  params: string | Date,
  format?: string,
  _withTime = false,
) {
  return dayjs(params)
    .locale(id)
    .format(format ?? FORMAT_DATE.DATE);
}

export function formatTimestamp(
  params: string | Date,
  _format?: string,
  _withTime = false,
) {
  return dayjs(params).locale(id).format(FORMAT_DATE.DATETIME);
}

export function formatDateServer(date: dayjs.Dayjs | string | null) {
  if (date) {
    return dayjs(date).format(FORMAT_DATE.SERVER).toString();
  }
  return "";
}

export function getMonthName(monthNumber: number, isFull = false) {
  const date = new Date();
  date.setMonth(monthNumber - 1); // starts with 0, so 0 is January
  return date.toLocaleString("id-ID", { month: isFull ? "long" : "short" });
}
