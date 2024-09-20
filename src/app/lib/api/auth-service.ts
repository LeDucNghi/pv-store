import { SignInPayload, User } from "@/models";

import axiosClient from "./axios-client";

export const authService = {
  signin(signinPayload: SignInPayload): Promise<User> {
    return axiosClient.post(`/auth/signin`, signinPayload);
  },

  signup({ email, password }: SignInPayload): Promise<User> {
    return axiosClient.post(`/auth/signup`, { email, password });
  },
};
