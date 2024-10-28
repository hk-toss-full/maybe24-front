import { useMutation } from "@tanstack/react-query";
import AuthApi, { RegisterRequest } from "../../../api/authApi";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../utils/paths";

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (request: RegisterRequest) => AuthApi.register(request),
    onSuccess: (response) => {
      if (response.code === 200) {
        navigate(PATH.LOGIN);
      }
    },
  });
};
