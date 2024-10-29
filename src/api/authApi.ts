import { axiosInstance } from "./axios";

export interface LoginRequest {
  userId: string;
  password: string;
}

export interface RegisterRequest {
  userId: string;
  nickname: string;
  password: string;
  phone: string;
  address: string;
}
export default class AuthApi {
  static async login({ userId, password }: LoginRequest) {
    const response = await axiosInstance.post("/auth/login", {
      userId,
      password,
    });
    return response.data;
  }
  static async register(request: RegisterRequest) {
    const response = await axiosInstance.post("/auth/register", request);
    return response.data;
  }
  static async checkDup(userId: string) {
    const { data } = await axiosInstance.post("/auth/check-dup", {
      userId,
    });
    return { data };
  }
}
