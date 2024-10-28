import clsx from "clsx";
import { Link, Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
  const pathname = useLocation().pathname;
  const isLoginPage = pathname === "/auth";

  return (
    <div className="bg-[#f8f8f8] w-full h-screen">
      <div className="max-w-[958px] min-w-[958px] mx-auto">
        <header className="flex justify-between relative h-[100px] items-center">
          <div>로고</div>
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-[24px] font-bold">
            {isLoginPage ? "로그인" : "회원가입"}
          </div>
          <Link
            to="/signup"
            className={clsx(
              !isLoginPage && "",
              "px-5 py-2 bg-white font-semibold border border-gray-300 shadow-sm text-[13px] rounded-sm"
            )}
          >
            회원가입
          </Link>
        </header>
        <div className=" bg-white h-full border border-gray-300">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
