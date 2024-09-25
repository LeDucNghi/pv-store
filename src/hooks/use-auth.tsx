"use client";

import { SignInPayload, SignUpPayload, User } from "@/models";
import { alert, cookies } from "@/utils";
import useSWR, { SWRConfiguration } from "swr";

import { authService } from "@/app/lib/api";
import { useRouter } from "next/navigation";

export interface IuseAuthProps {}

function getUserInfo(): User | null {
  try {
    const user = cookies.getCookie("user");
    return JSON.parse(user || "");
  } catch (error) {
    return null;
  }
}

export function useAuth(options?: Partial<SWRConfiguration>) {
  const router = useRouter();

  const {
    data: profile,
    error,
    mutate,
  } = useSWR<User | null>(
    "/auth", // key
    {
      // options
      // call API after 1hr
      dedupingInterval: 60 * 60 * 1000, // 1hr

      // prevent call API after this tab
      revalidateOnFocus: false,
      ...options,
      fallbackData: getUserInfo(),
      onSuccess(data) {
        cookies.setCookie("user", data);
      },
      onError(err) {
        console.log(err);
        signout();
      },
    }
  );

  const firstLoading = profile === undefined && error === undefined;

  async function signin(payload: SignInPayload) {
    try {
      const user = await authService.signin(payload);

      cookies.setCookie("user", user);

      await mutate();

      router.push("/");
    } catch (error: any) {
      console.log("🚀 ~ signin ~ error:", error);

      if (error) {
        alert({
          content: `${error.message}`,
          position: "top-center",
          type: "error",
        });
      }
    }
  }

  async function signup(payload: SignUpPayload) {
    try {
      const user = await authService.signup(payload);

      cookies.setCookie("user", user);

      await mutate();

      router.push("/signin");
    } catch (error: any) {
      console.log("🚀 ~ signin ~ error:", error);

      if (error) {
        alert({
          content: `${error.message}`,
          position: "top-center",
          type: "error",
        });
      }
    }
  }

  async function signout() {
    await authService.signout();
    mutate(null, false);
    cookies.removeCookie("user");
  }

  return {
    profile,
    error,
    signin,
    signout,
    signup,
    firstLoading,
    isLoggedIn: Boolean(profile),
  };
}
