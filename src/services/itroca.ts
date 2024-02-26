export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export interface ItrocaSignUpInterface
  extends Pick<iTrocaUser, "address" | "age" | "email" | "name"> {
  password: string;
}
export interface ItrocaCreateProduct
  extends Pick<ITrocaProduct, "image" | "name" | "price"> {}

async function throwIfResponseNotOk(response: Response) {
  // TODO: add the error interfaces that problaby can come here.
  console.error("throwIfResponseNotOk:");
  if (!response.ok) {
    throw await response.json();
  }
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
    credentials: "include",
    cache: "no-cache",
    method: "POST",
    body: JSON.stringify(body),
  };

  const response = await fetch(`${API_URL}/auth/signin`, options);
  await throwIfResponseNotOk(response);

  const data: ITrocarUserCredentials = await response.json();
  return data;
};
export const signUp = async (
  props: ItrocaSignUpInterface
): Promise<ITrocarUserCredentials> => {
  const body = props;
  const options: RequestInit = {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    cache: "no-cache",
    method: "POST",
    body: JSON.stringify(body),
  };

  const response = await fetch(`${API_URL}/auth/signup`, options);
  await throwIfResponseNotOk(response);

  const data: ITrocarUserCredentials = await response.json();
  return data;
};

export const signOut = async (): Promise<{ token: string }> => {
  const options: RequestInit = {
    method: "POST",
    credentials: "include",
  };
  const response = await fetch(`${API_URL}/auth/signout`, options);
  await throwIfResponseNotOk(response);
  const data: { token: string } = await response.json();
  return data;
};

export const getUser = async (): Promise<iTrocaUser> => {
  const options: RequestInit = {
    credentials: "include",
  };
  const response = await fetch(`${API_URL}/user`, options);
  await throwIfResponseNotOk(response);
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
  await throwIfResponseNotOk(response);
  const data: ITrocaProduct[] = await response.json();
  return data;
};
export const postProduct = async ({
  body,
  customOptions,
}: {
  body: ItrocaCreateProduct;
  customOptions?: RequestInit;
}): Promise<ITrocaProduct> => {
  const options: RequestInit = {
    credentials: "include",
    ...customOptions,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(`${API_URL}/products`, options);
  await throwIfResponseNotOk(response);
  const data: ITrocaProduct = await response.json();
  return data;
};
