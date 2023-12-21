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

export const getUser = async (): Promise<iTrocaUser> => {
  const response = await fetch(`/api/auth/signin`);
  const data: iTrocaUser = await response.json();
  return data;
};

export const getProducts = async ({
  token,
}: {
  token: string;
}): Promise<ITrocaProduct[] | []> => {
  const options: RequestInit = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(`${API_URL}/products`, options);
  const data: ITrocaProduct[] = await response.json();
  return data;
};
