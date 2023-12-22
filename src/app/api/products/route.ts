"use server";
import { NextRequest, NextResponse } from "next/server";

import { getTokenHandler } from "@/helpers/server";
const API_URL = process.env.API_URL;

export async function GET(reqreq: NextRequest, res: NextResponse) {
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

    const response = await fetch(`${API_URL}/products`, options);
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
