export const API_URL = process.env.NEXT_PUBLIC_API_URL;
interface AuthorizedRequest {
  token: string;
}
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

  const response = await fetch(`${API_URL}/auth/signin`, options);
  const data: ITrocarUserCredentials = await response.json();
  return data;
};

export const signOut = async ({
  token,
}: AuthorizedRequest): Promise<{ token: string }> => {
  const options: RequestInit = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(`${API_URL}/auth/signout`, options);
  const data: { token: string } = await response.json();
  return data;
};

export const getUser = async ({
  token,
}: AuthorizedRequest): Promise<iTrocaUser> => {
  const options: RequestInit = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(`${API_URL}/user`, options);
  const data: iTrocaUser = await response.json();
  return data;
};

export const getProducts = async ({
  token,
}: AuthorizedRequest): Promise<ITrocaProduct[] | []> => {
  const options: RequestInit = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(`${API_URL}/products`, options);
  const data: ITrocaProduct[] = await response.json();
  return data;
};
