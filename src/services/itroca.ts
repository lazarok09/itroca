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
