import { authorizeUser } from "./auth";
export const API_URL = process.env.API_URL;

export const submitLogin = async ({
  useremail,
  password,
}: {
  useremail: string;
  password: string;
}): Promise<ITrocarUserCredentials> => {
  const result = await authorizeUser({
    email: useremail,
    password,
  });
  return result;
};

export const getUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  const data: iTrocaUser[] = await response.json();
  return data;
};
export const getUser = async ({ token, id }: { token: string; id: string }) => {
  const options: RequestInit = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(`${API_URL}/user/${id}`, options);
  const data: iTrocaUser[] = await response.json();
  return data;
};
