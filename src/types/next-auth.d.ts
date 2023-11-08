import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's interface*/
      message: string;
      token: string;
      shopkeeper: {
        id: 811;
        instagram: string;
        name: string;
        email: string;
        phone: string;
        email_verified_at: string;
        phone_verified_at: string;
        state: string;
        city: string;
        created_at: string;
        updated_at: string;
        deleted_at: null;
      };
    };
  }
}
