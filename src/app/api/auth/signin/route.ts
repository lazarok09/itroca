"use server";
import { NextApiResponse } from "next";
import { cookies } from "next/headers";

const API_URL = process.env.API_URL;
const AUTH_COOKIE_NAME = "itrocatoken";

export async function POST(req: Request, res: NextApiResponse<iTrocaUser>) {
  const requestBody: { email: string; password: string } = await req.json();

  const { email, password } = requestBody;
  const body = { email, password };
  const options: RequestInit = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  };
  const URL = `${API_URL}/auth/signin`;
  const response = await fetch(`${URL}`, options);

  const user: ITrocarUserCredentials = await response.json();

  // TODO: receive the cookie expiration from backend
  const dateNow = new Date();
  const oneHourFromNow = new Date(dateNow);
  oneHourFromNow.setHours(dateNow.getHours());

  cookies().set(AUTH_COOKIE_NAME, user.token, {
    httpOnly: true,
    expires: oneHourFromNow.getMilliseconds(),
    secure: true,
  });

  return new Response(JSON.stringify(user), {
    status: 200,
  });
}
