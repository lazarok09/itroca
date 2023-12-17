import { NextApiRequest, NextApiResponse } from "next";

const API_URL = process.env.API_URL;

export async function POST(req: Request, res: NextApiResponse<{}>) {
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

  const data: ITrocarUserCredentials = await response.json();
  return Response.json(data);
}
