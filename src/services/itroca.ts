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
  const data = new Promise<ITrocarUserCredentials>((resolve) => {
    return resolve({
      address: "asd",
      age: 14,
      email: "adolwpkoa@gmail.com",
      hash: "219031209",
      id: 1,
      name: "lazaro",
      token: '091029i1231221'
    });
  });
  return data;
};

export const getUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  const data: iTrocaUser[] = await response.json();
  return data;
};
