export const BFF_API_URL = process.env.NEXT_PUBLIC_SITE_URL;

export const signIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<ITrocarUserCredentials> => {
  const body = {
    email,
    password,
  };
  const options: RequestInit = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  };
  const LOCAL_API = `${BFF_API_URL}/api/auth/signin`;
  const response = await fetch(`${LOCAL_API}`, options);
  const data: ITrocarUserCredentials = await response.json();
  return data;
};

export const signOut = async (): Promise<{ token: string }> => {
  const options: RequestInit = {
    method: "POST",
  };
  const response = await fetch(`${BFF_API_URL}/api/auth/signout`, options);
  const data: { token: string } = await response.json();
  return data;
};

export const getUser = async (): Promise<iTrocaUser> => {
  const response = await fetch(`${BFF_API_URL}/api/user`);
  const data: iTrocaUser = await response.json();
  return data;
};

export const getProducts = async (): Promise<ITrocaProduct[] | []> => {
  const response = await fetch(`${BFF_API_URL}/api/products`);
  const data: ITrocaProduct[] = await response.json();
  return data;
};
