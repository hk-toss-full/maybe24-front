import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import AuthApi, { LoginRequest } from "../../api/authApi";

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (request: LoginRequest) => AuthApi.login(request),
    onSuccess: (response) => {
      if (response.code === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }
    },
  });
};
