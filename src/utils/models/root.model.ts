// export interface InitialResponseModel {
//   response: GlobalResponseModel;
//   filter: FilterResponseModel;
//   status: 'idle' | 'loading' | 'success' | 'fail';
//   error: any;
// }

import { GetProp, UploadProps } from "antd";

export interface GlobalResponseModel<T> {
  statusCode: number;
  message: string;
  data: T[];
  meta?: TMeta;
}

export type TColor =
  | "primary"
  | "secondary"
  | "default"
  | "info"
  | "success"
  | "danger"
  | "warning"
  | "green"
  | "sky"
  | "cyan"
  | "indigo"
  | "violet"
  | "purple";
export type TSize = "lg" | "base" | "sm";

export type TMeta = {
  total: number | null;
  lastPage: number | null;
  currentPage: number | null;
  perPage: number | null;
  prev: number | null;
  next: number | null;
};

export interface FilterResponseModel {
  page?: number | null;
  pageSize?: number | null;
  search?: string | null;
  type?: string | null;
  regionId?: string | null;
  isHld?: number | null;
  isUtility?: number | null;
  hld?: string | null;
  startDate?: string | null;
  endDate?: string | null;
}

export type TStatusFetch = "idle" | "loading" | "success" | "fail";

export interface DefaultOptionType {
  label: React.ReactNode;
  value?: string | number | null | boolean;
}

export type TParams = {
  params: {
    pid: string;
  };
};

export type TGenerateBy = "class" | "major" | "student";

export type TLocation = {
  lat: number;
  lng: number;
};

export type TButtonType = "delete" | "primary" | "secondary" | "basic";
export type TButtonSize = "lg" | "base" | "sm";
export type TIndependen = "independen" | "interdependen";
export type THld = "hld" | "nonhld" | "null";

export type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
