import { Spin } from "antd";

export default function SpinLoading() {
  return (
    <div className="z-[999] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
      <Spin size="large" />
    </div>
  );
}
