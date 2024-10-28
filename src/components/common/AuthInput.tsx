import { InputHTMLAttributes } from "react";

const AuthInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className="w-full border border-gray-300 shadow-inner p-3 rounded-sm "
      {...props}
    />
  );
};

export default AuthInput;
