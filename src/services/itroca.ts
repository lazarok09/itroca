import { signIn } from "next-auth/react";
import { authorizeUser } from "./auth";
export const API_URL = process.env.API_URL;

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
  });
  return result;
};

export const authorizeNextAuthHandler = async (props: {
  email: string;
  password: string;
}) => {
  return await authorizeUser(props);
};

export const getUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  const data: iTrocaUser[] = await response.json();
  return data;
};
