import { CustomSessionContext } from "@/context/Session/context";

import { useContext } from "react";

export const useSession = () => {
  const { session, setSession } = useContext(CustomSessionContext);

  const isAuthenticated = session.status === "authenticated";
  const isPending = session.status === "pending";
  const isNotAuthenticated = session.status === "notauthenticated";

  return {
    session,
    setSession,
    isAuthenticated,
    isPending,
    isNotAuthenticated,
  };
};

export const AUTH_COOKIE_NAME = "itrocatoken";
