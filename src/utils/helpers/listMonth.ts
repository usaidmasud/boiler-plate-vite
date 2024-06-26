type TMonth = {
  key: number;
  value: string;
  prefix: string;
};

export const listMonth: TMonth[] = [
  { key: 7, value: "Juli", prefix: "Jul" },
  { key: 8, value: "Agustus", prefix: "Ags" },
  { key: 9, value: "September", prefix: "Sep" },
  { key: 10, value: "Oktober", prefix: "Okt" },
  { key: 11, value: "November", prefix: "Nov" },
  { key: 12, value: "Desember", prefix: "Des" },
  { key: 1, value: "Januari", prefix: "Jan" },
  { key: 2, value: "Februari", prefix: "Feb" },
  { key: 3, value: "Maret", prefix: "Mar" },
  { key: 4, value: "April", prefix: "Apr" },
  { key: 5, value: "Mei", prefix: "Mei" },
  { key: 6, value: "Juni", prefix: "Jun" },
];

// You can now use listMonth in your components
