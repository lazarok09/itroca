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

// export const authorizeNextAuthHandler = async (props: {
//   email: string;
//   password: string;
// }) => {
//   const options: RequestInit = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     method: "POST",
//     body: JSON.stringify(props),
//   };
//   const response = await fetch(
//     "https://itroca.com.br/api/shopkeeper/auth/signin",
//     options
//   );
//   const data: iTrocaUser = await response.json();
//   return data;
// };
export const authorizeNextAuthHandler = async (props: {
  email: string;
  password: string;
}) => {
  const data = new Promise<iTrocaUser>((resolve) => {
    return resolve({
      message: "sucesso",
      token: "MDawkwdm09oawd012",
      shopkeeper: {
        id: 811,
        instagram: "@lulu",
        name: "user",
        email: "testuser@hotmail.com",
        phone: "81978328219",
        email_verified_at: "921092123",
        phone_verified_at: "901290312",
        state: "US",
        city: "Marlyn",
        created_at: "219001239",
        updated_at: "123123213",
        deleted_at: null,
      },
    });
  });
  return data;
};
