import { renderImageUpload } from "@/utils/helpers/renderImageUpload";
import { Image } from "antd";

type Props = {
  url: string;
  width?: number | string;
  height?: number | string;
};
export default function RenderImage({ url, width = 20, height = 20 }: Props) {
  return (
    <Image
      loading="lazy"
      src={renderImageUpload(url)}
      height={height}
      width={width}
    />
  );
}
