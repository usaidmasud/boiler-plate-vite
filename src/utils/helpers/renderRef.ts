import isNull from "./isNull";

const refs = [
  {
    key: "debt",
    value: "Hutang",
  },
  {
    key: "debt-payment",
    value: "Pembayaran Hutang",
  },
  {
    key: "piutang",
    value: "Piutang",
  },
  {
    key: "piutang-payment",
    value: "Pembayaran Piutang",
  },
  {
    key: "free-payment",
    value: "Pembayaran Tagihan",
  },
  {
    key: "monthly-payment",
    value: "Pembayaran Tagihan Bulanan",
  },
];
export const renderRef = (value: string | null) => {
  if (!isNull(value)) {
    const array = value!.split("=");
    const key = array[0];

    const matchingRef = refs.find((ref) => ref.key === key);

    return matchingRef ? matchingRef.value : array[0];
  }
  return "";
};
