// import { Outlet } from "react-router-dom";
import NavHeader from "../components/common/NavHeader";
import { PropsWithChildren } from "react";

const LandingLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative">
      <NavHeader />
      {/* <Outlet /> */}
      {children}
    </div>
  );
};

export default LandingLayout;
