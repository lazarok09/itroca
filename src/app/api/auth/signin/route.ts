"use server";
import { NextApiResponse } from "next";

const API_URL = process.env.API_URL;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

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

  const expiration = REFRESH_TOKEN ?? "1h";
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Set-Cookie": `${generateCookie({
        cookieValue: data.token,
        expiration,
        options: {
          secure: true,
        },
      })}`,
    },
  });
}

interface CookieOptions {
  secure?: boolean;
  // Adicione mais opções conforme necessário
}

function generateCookie({
  cookieValue,
  expiration,
  options,
}: {
  cookieValue: string;
  expiration: string;
  options?: CookieOptions;
}): string {
  const expirationUnits: { [key: string]: string } = {
    s: "seconds",
    m: "minutes",
    h: "hours",
    d: "days",
    y: "years",
  };

  // Extrai a unidade e o valor do tempo de expiração
  const unit: string = expiration.slice(-1);
  const value: number = parseInt(expiration.slice(0, -1), 10);

  // Verifica se a unidade é válida
  if (!(unit in expirationUnits)) {
    throw new Error(
      "Unidade de expiração inválida. Use 's' para segundos, 'm' para minutos, 'h' para horas, 'd' para dias, 'y' para anos."
    );
  }

  // Calcula a data de expiração com base na unidade e valor fornecidos
  const expirationTime: Date = new Date();
  expirationTime.setTime(expirationTime.getTime() + value * 1000); // Multiplica por 1000 para converter segundos para milissegundos

  // Formata a data de expiração para o formato de cookie
  const formattedExpiration: string = expirationTime.toUTCString();

  // Gera o cookie
  let cookie: string = `${cookieValue}=${cookieValue}; expires=${formattedExpiration}; path=/`;

  // Adiciona propriedades opcionais
  if (options) {
    if (options.secure) {
      cookie += "; secure";
    }
    // Adicione mais propriedades conforme necessário
  }

  return cookie;
}
