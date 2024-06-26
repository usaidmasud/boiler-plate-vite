import { Button } from "antd";
import Box from "./Box";
import CustomPopConfirm from "./CustomPopConfirm";
import RenderImage from "./RenderImage";
import React from "react";

type Props = {
  imageLink: string;
  onConfirm: () => void;
};
function CardImage({ imageLink, onConfirm }: Props) {
  return (
    <Box className="flex flex-col justify-center items-center w-[150px] h-[150px] relative group">
      <RenderImage url={imageLink} width={200} height={150} />
      <div className="group-hover:block hidden p-2 absolute bottom-0  w-full">
        <CustomPopConfirm onConfirm={onConfirm}>
          <Button block danger type="primary">
            Hapus
          </Button>
        </CustomPopConfirm>
      </div>
    </Box>
  );
}

export default React.memo(CardImage);
