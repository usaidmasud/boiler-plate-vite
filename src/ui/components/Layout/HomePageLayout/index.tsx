import { Outlet } from "react-router-dom";
import CustomTheme from "./CustomTheme";

export default function HomePageLayout() {
  return (
    <CustomTheme>
      <div className="w-full ">
        {/* <Navbar /> */}
        {/* <div className="bg-white"> */}
        <Outlet />
        {/* </div> */}
        {/* <Footer sww/> */}
      </div>
    </CustomTheme>
  );
}
