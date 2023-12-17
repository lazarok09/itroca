import { authorizeNextAuthHandler } from "@/services/itroca";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        useremail: {
          label: "User email",
          type: "text",
          placeholder: "example@hotmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      // @ts-ignore
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        if (!credentials?.password || !credentials.useremail) return null;

        const data = await authorizeNextAuthHandler({
          email: credentials?.useremail,
          password: credentials?.password,
        });

        const isValidUser = data?.email;

        if (isValidUser) {
          // Any object returned will be saved in `user` property of the JWT
          return {
            token: data.token,
            name: data.name,
            email: data.email,
            id: data.id,
          };
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
