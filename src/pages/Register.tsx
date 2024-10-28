import AuthInput from "../components/common/AuthInput";

const RegisterPage = () => {
  return (
    <div className=" p-[200px]">
      <form className="flex gap-4 flex-col">
        <div className="flex space-x-2">
          <AuthInput placeholder="아이디" />
          <button className="whitespace-nowrap p-4 rounded-sm border border-[#1869B3] text-[#1869B3] ">
            중복체크
          </button>
        </div>
        <AuthInput type="password" placeholder="비밀번호" />
        <AuthInput type="number" placeholder="전화번호" />
        <AuthInput placeholder="주소" />
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
