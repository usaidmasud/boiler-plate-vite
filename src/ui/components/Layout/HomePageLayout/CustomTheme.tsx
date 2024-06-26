import { StyleProvider } from "@ant-design/cssinjs";
import "@fontsource/nunito";
import { ConfigProvider } from "antd";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
export default function CustomTheme({ children }: Props) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: "#2980b9",
            algorithm: false,
          },
          Table: {
            colorBgContainer: "#fff",
          },
          Menu: {},
          Dropdown: {
            colorLinkHover: "#2c3e50",
          },
        },
        token: {
          // fontFamily: "Poppins, 'sans-serif",
          fontFamily: "Nunito, sans-serif", // Specify
          // Seed Token
          colorPrimary: "#2980b9",
          // borderRadius: 2,
          // Alias Token
          colorBgContainer: "#fff",
        },
        cssVar: true,
        // hashed: false,
      }}
    >
      <StyleProvider hashPriority="high">{children}</StyleProvider>
    </ConfigProvider>
  );
}
