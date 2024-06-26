import { Button, ButtonProps } from "antd";

interface Props extends ButtonProps {}
export default function ButtonBasic({ ...rest }: Props) {
  return <Button type="primary" {...rest} />;
}
