export const API_URL = process.env.NEXT_PUBLIC_API_URL;

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
    credentials: "include",
    cache: "no-cache",
    method: "POST",
    body: JSON.stringify(body),
  };

  const response = await fetch(`${API_URL}/auth/signin`, options);
  const data: ITrocarUserCredentials = await response.json();
  return data;
};

export const signOut = async (): Promise<{ token: string }> => {
  const options: RequestInit = {
    method: "POST",
    credentials: "include",
  };
  const response = await fetch(`${API_URL}/auth/signout`, options);
  const data: { token: string } = await response.json();
  return data;
};

export const getUser = async (): Promise<iTrocaUser> => {
  const options: RequestInit = {
    credentials: "include",
  };
  const response = await fetch(`${API_URL}/user`, options);
  const data: iTrocaUser = await response.json();
  return data;
};

export const getProducts = async ({
  customOptions,
}: {
  customOptions?: RequestInit;
}): Promise<ITrocaProduct[] | []> => {
  const options: RequestInit = {
    credentials: "include",
    ...customOptions,
  };
  const response = await fetch(`${API_URL}/products`, options);
  const data: ITrocaProduct[] = await response.json();
  return data;
};
