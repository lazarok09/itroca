import { Session } from "next-auth";
import { signIn } from "next-auth/react";

export const submitLogin = async ({
  useremail,
  password,
}: {
  useremail: string;
  password: string;
}) => {
  const result = await signIn("credentials", {
    redirect: false,
    useremail,
    password,

    // Incluir os campos de autenticação (email, senha, etc.) aqui.
  });
  return result;
};

export const authorizeNextAuthHandler = async (props: {
  email: string;
  password: string;
}) => {
  const options: RequestInit = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(props),
  };
  const response = await fetch(
    "https://itroca.com.br/api/shopkeeper/auth/signin",
    options
  );
  const data: iTrocaUser = await response.json();
  return data;
};
