import { CheckIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Popconfirm, Tooltip } from "antd";
import React, { ReactNode } from "react";
import ButtonIcon from "./ButtonIcon";
import { MESSAGE_STATE } from "@/utils/helpers/messageState";

type Props = {
  handleEdit?: () => void;
  handleDelete?: () => void;
  handleActivate?: () => void;
  showDelete?: boolean;
  showEdit?: boolean;
  showActivate?: boolean;
  prefix?: ReactNode;
};

function ButtonAction({
  handleDelete,
  handleEdit,
  prefix,
  showDelete = true,
  handleActivate,
  showActivate = false,
  showEdit = true,
}: Props) {
  return (
    <div className="inline-flex gap-1 items-center">
      {prefix}
      {showActivate && (
        <Tooltip title="Aktifkan record">
          <ButtonIcon
            color="blue"
            onClick={handleActivate}
            icon={<CheckIcon className="h-4 w-4" />}
          />
        </Tooltip>
      )}
      {showEdit && (
        <Tooltip title={MESSAGE_STATE.BUTTON_EDIT}>
          <ButtonIcon
            color="green"
            onClick={handleEdit}
            icon={<PencilIcon className="h-4 w-4" />}
          />
        </Tooltip>
      )}
      {showDelete && (
        <Tooltip title={MESSAGE_STATE.BUTTON_DELETE}>
          <Popconfirm
            title={MESSAGE_STATE.CONFIRM}
            description={MESSAGE_STATE.CONFIRM_DELETE}
            onConfirm={handleDelete}
            cancelText={MESSAGE_STATE.BUTTON_CANCEL}
            onOpenChange={() => console.log("open change")}
          >
            <ButtonIcon color="red" icon={<TrashIcon className="h-4 w-4" />} />
          </Popconfirm>
        </Tooltip>
      )}
    </div>
  );
}
export default React.memo(ButtonAction);
