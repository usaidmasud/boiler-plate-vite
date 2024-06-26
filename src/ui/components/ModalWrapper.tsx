import { Modal, ModalProps } from "antd";
import React from "react";

interface Props extends ModalProps {}
function ModalWrapper({ ...rest }: Props) {
  return <Modal maskClosable={false} title="Title" {...rest} />;
}

export default React.memo(ModalWrapper);
