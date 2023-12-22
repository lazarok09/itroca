"use server";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

const AUTH_COOKIE_NAME = "itrocatoken";

type ErrorInterface = {
  message: string;
  status: number;
};
type TokenHandlerResult = {
  cookie: RequestCookie | undefined;
  error?: ErrorInterface;
};

export async function getTokenHandler(): Promise<TokenHandlerResult> {
  const cookie = cookies();
  const cookieToken = cookie.get(AUTH_COOKIE_NAME);

  if (!cookieToken) {
    const error: ErrorInterface = {
      message: "token is missing",
      status: 400,
    };

    return new Promise((resolve) => resolve({ cookie: undefined, error }));
  }
  return new Promise((resolve) =>
    resolve({ cookie: cookieToken, error: undefined })
  );
}
