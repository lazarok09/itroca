import { CustomSessionContext } from "@/context/Session/context";

import { useContext } from "react";

export const useSession = () => {
  const { session } = useContext(CustomSessionContext);
  return { session };
};

export const AUTH_COOKIE_NAME = "itrocatoken";
