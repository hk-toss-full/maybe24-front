import { Link, useLocation } from "react-router-dom";
import { PATH } from "../../utils/paths";

const AuthHeader = () => {
  const pathname = useLocation().pathname;
  const isLoginPage = pathname === PATH.LOGIN;

  return (
    <header className="flex justify-between relative h-[100px] items-center">
      <Link to="/">로고</Link>
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-[24px] font-bold">
        {isLoginPage ? "로그인" : "회원가입"}
      </div>
      <Link
        to={isLoginPage ? PATH.REGISTER : PATH.LOGIN}
        className="px-5 py-2 bg-white font-semibold border border-gray-300 shadow-sm text-[13px] rounded-sm"
      >
        {isLoginPage ? "회원가입" : "로그인"}
      </Link>
    </header>
  );
};

export default AuthHeader;
