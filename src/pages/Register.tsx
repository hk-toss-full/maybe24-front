import { ChangeEvent, FormEventHandler, useState } from "react";
import AuthInput from "../components/common/AuthInput";
import { RegisterRequest } from "../api/authApi";
import { useCheckDup } from "../components/hooks/api/useCheckDup";
import clsx from "clsx";
import { useLogin } from "../components/hooks/api/useLogin";
import { useRegister } from "../components/hooks/api/useRegister";

const FIELDS = ["userId", "nickname", "password", "phone", "address"];
const RegisterPage = () => {
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [formState, setFormState] = useState<RegisterRequest>({
    userId: "",
    nickname: "",
    password: "",
    phone: "",
    address: "",
  });

  const { data: checkDupRes, mutateAsync: checkDup } = useCheckDup();
  const { mutate: register } = useRegister();

  const onChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setFormState((formState) => ({
      ...formState,
      [target.name]: target.value,
    }));

  const onClickCheckDup = async () => {
    if (formState.userId.length === 0) return;
    await checkDup(formState.userId).then((res) =>
      setIsAvailable(res.data.code === 200)
    );
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    FIELDS.map((field: string) =>
      setFormState((formState) => ({
        ...formState,
        [field]: e.target[field].value,
      }))
    );
    register(formState);
  };

  return (
    <div className=" p-[200px]">
      <form className="flex gap-4 flex-col relative" onSubmit={onSubmit}>
        <span
          className={clsx(
            "absolute -top-5 text-[12px]",
            isAvailable ? "text-green-600" : "text-red-600"
          )}
        >
          {checkDupRes?.data.message}
        </span>

        <div className="flex space-x-2">
          <AuthInput
            name="userId"
            placeholder="*아이디"
            value={formState.userId}
            onChange={onChangeInput}
          />
          <button
            type="button"
            className="whitespace-nowrap p-4 rounded-sm border border-[#1869B3] text-[#1869B3] "
            onClick={onClickCheckDup}
          >
            중복체크
          </button>
        </div>
        <AuthInput
          name="password"
          type="password"
          placeholder="*비밀번호"
          onChange={onChangeInput}
        />
        <AuthInput
          name="nickname"
          placeholder="*닉네임"
          onChange={onChangeInput}
        />
        <AuthInput
          name="phone"
          type="number"
          placeholder="*전화번호"
          onChange={onChangeInput}
        />
        <AuthInput name="address" placeholder="주소" onChange={onChangeInput} />
        <button
          type="submit"
          className="w-full mt-4 p-4 rounded-sm bg-[#1869B3] text-white"
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
