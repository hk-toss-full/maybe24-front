import { Outlet } from "react-router-dom";
import AuthHeader from "../components/common/AuthHeader";

const AuthLayout = () => {
  return (
    <div className="bg-[#f8f8f8] w-full h-screen">
      <div className="max-w-[958px] min-w-[958px] mx-auto">
        <AuthHeader />
        <div className=" bg-white h-full border border-gray-300">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
