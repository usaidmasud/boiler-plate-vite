import { MESSAGE_STATE } from "@/utils/helpers/messageState";
import { Button, Popconfirm } from "antd";
import React from "react";

type Props = {
  selectedRowKeys: React.Key[];
  handleClick: () => void;
};
function ButtonDeleteBulk({ selectedRowKeys, handleClick }: Props) {
  if (selectedRowKeys.length > 0) {
    return (
      <div className="pb-4">
        <Popconfirm
          title={MESSAGE_STATE.CONFIRM}
          description={MESSAGE_STATE.CONFIRM_DELETE}
          onConfirm={handleClick}
          cancelText={MESSAGE_STATE.BUTTON_CANCEL}
          onOpenChange={() => console.log("open change")}
        >
          <Button danger type="primary">
            Hapus Data
          </Button>
        </Popconfirm>
      </div>
    );
  }
  return <div></div>;
}

export default React.memo(ButtonDeleteBulk);
