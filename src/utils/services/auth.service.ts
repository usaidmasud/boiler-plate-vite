import { useMutation } from "@tanstack/react-query";
import SessionStorage from "../helpers/sessionStorage";
import { apiPublic } from "../libs/axios/apiPublic";
import { RequestDataLogin } from "../models/auth.model";

const authenticated = async (data: RequestDataLogin) => {
  const response = await apiPublic.post("/auth/login", data);
  return response.data;
};

const useAuthenticated = () => {
  return useMutation({
    mutationKey: ["auth-signin"],
    mutationFn: (data: RequestDataLogin) => authenticated(data),
    onSuccess: (res) => {
      console.log("auth", res.data.accessToken);
      SessionStorage.setSessionStorage("accessToken", res.data.accessToken);
    },
  });
};

export const authService = {
  useAuthenticated,
};
