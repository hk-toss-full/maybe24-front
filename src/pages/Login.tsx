import { FormEventHandler } from "react";
import AuthInput from "../components/common/AuthInput";

const LoginPage = () => {
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // TODO: 로그인 API호출
  };

  return (
    <div className="flex p-[60px] gap-10 justify-center">
      <div className="flex-1 flex items-center">
        <form action="/" onSubmit={onSubmit} className="space-y-2 ">
          <AuthInput name="id" placeholder="아이디" />
          <AuthInput name="password" placeholder="비밀번호" />
          <button
            type="submit"
            className="rounded-sm py-4 text-[20px] font-semibold bg-[#1869B3] text-white w-full"
          >
            로그인
          </button>
        </form>
      </div>
      <div className="flex-1 space-y-2">
        <img
          src="https://image.yes24.com/images/00_Event/2024/0617Gift/bn_1080x1080.jpg"
          className="aspect-square w-[360px]"
        />
        <img
          src="http://adgirl.yes24.com/RealMedia/ads/Creatives/OasDefault/Login_Bottom/login_50536.jpg"
          className="w-[360px]"
        />
      </div>
    </div>
  );
};

export default LoginPage;
