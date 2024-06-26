import { MESSAGE_STATE } from "@/utils/helpers/messageState";
import { Popconfirm } from "antd";
import React from "react";

type Props = {
  onConfirm?: () => void;
  children: React.ReactNode;
};
function CustomPopConfirm({ onConfirm, children }: Props) {
  return (
    <Popconfirm
      title={MESSAGE_STATE.CONFIRM}
      description={MESSAGE_STATE.CONFIRM_DELETE}
      cancelText={MESSAGE_STATE.BUTTON_CANCEL}
      onConfirm={onConfirm}
      onOpenChange={() => console.log("open change")}
    >
      {children}
    </Popconfirm>
  );
}

export default React.memo(CustomPopConfirm);
