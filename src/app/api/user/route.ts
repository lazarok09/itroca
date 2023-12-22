"use server";

const API_URL = process.env.API_URL;

import { getTokenHandler } from "@/helpers/server";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const tokenHandlerInfo = await getTokenHandler();
  const error = tokenHandlerInfo.error;
  const cookie = tokenHandlerInfo.cookie;

  if (cookie) {
    const options: RequestInit = {
      headers: {
        Authorization: `Bearer ${cookie.value}`,
      },
      next: {
        revalidate: 10,
      },
    };

    const response = await fetch(`${API_URL}/user`, options);
    const data: iTrocaUser = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
    });
  } else if (error) {
    return new Response(JSON.stringify(error), {
      status: error.status,
    });
  }
}
