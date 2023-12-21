"use server";
import { cookies } from "next/headers";

const API_URL = process.env.API_URL;
const AUTH_COOKIE_NAME = "itrocatoken";

interface ErrorInterface {
  message: string;
  status: number;
}

import { NextApiResponse } from "next";

export async function GET(
  req: Request,
  res: NextApiResponse<iTrocaUser | ErrorInterface>
) {
  const cookie = cookies();
  const bearerToken = cookie.get(AUTH_COOKIE_NAME);

  if (!bearerToken) {
    const error = {
      message: "token is missing",
      status: 400,
    } satisfies ErrorInterface;

    return new Response(JSON.stringify(error), {
      status: 200,
    });
  }

  const options: RequestInit = {
    headers: {
      Authorization: `Bearer ${bearerToken.value}`,
    },
  };

  const response = await fetch(`${API_URL}/user`, options);
  const data: iTrocaUser = await response.json();

  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
