import { useMutation } from "@tanstack/react-query";
import AuthApi from "../../api/authApi";

export const useCheckDup = () => {
  return useMutation({
    mutationFn: (id: string) => AuthApi.checkDup(id),
  });
};
