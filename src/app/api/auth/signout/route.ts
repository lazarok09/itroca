"use server";
import { getTokenHandler } from "@/helpers/server";
import { NextApiResponse } from "next";
import { cookies } from "next/headers";

const API_URL = process.env.API_URL;
const AUTH_COOKIE_NAME = "itrocatoken";

export async function POST(req: Request, res: NextApiResponse<iTrocaUser>) {
  const tokenHandlerInfo = await getTokenHandler();
  const error = tokenHandlerInfo.error;
  const cookie = tokenHandlerInfo.cookie;

  if (cookie) {
    const options: RequestInit = {
      headers: {
        Authorization: `Bearer ${cookie.value}`,
      },
      method: "POST",
    };

    const URL = `${API_URL}/auth/signout`;
    const response = await fetch(`${URL}`, options);

    const result: { token: string } = await response.json();

    cookies().delete(AUTH_COOKIE_NAME);

    return new Response(JSON.stringify(result), {
      status: 200,
    });
  } else if (error) {
    return new Response(JSON.stringify(error), {
      status: error.status,
    });
  }
}
