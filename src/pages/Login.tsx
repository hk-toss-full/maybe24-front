import { ChangeEvent, FormEventHandler, useState } from "react";
import AuthInput from "../components/common/AuthInput";
import { LoginRequest } from "../api/authApi";
import { useLogin } from "../hooks/api/useLogin";

const LoginPage = () => {
  const [error, setError] = useState<string | null>(null);
  const [formState, setFormState] = useState<LoginRequest>({
    userId: "",
    password: "",
  });
  const { mutateAsync: login } = useLogin();

  const onChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setFormState((formState) => ({
      ...formState,
      [target.name]: target.value,
    }));

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const response = await login(formState);
    if (response?.code !== 200) {
      setError(response?.message);
    }
  };

  return (
    <div className="flex p-[60px] gap-10 justify-center">
      <div className="flex-1 flex items-center ">
        <div className="relative">
          <span className="absoltue text-red-600 text-[12px] absolute -top-5">
            {error}
          </span>
          <form action="/" onSubmit={onSubmit} className="space-y-2 ">
            <AuthInput
              name="userId"
              placeholder="아이디"
              onChange={onChangeInput}
            />
            <AuthInput
              name="password"
              type="password"
              placeholder="비밀번호"
              onChange={onChangeInput}
            />
            <button
              type="submit"
              className="rounded-sm py-4 text-[20px] font-semibold bg-[#1869B3] text-white w-full"
            >
              로그인
            </button>
          </form>
        </div>
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
