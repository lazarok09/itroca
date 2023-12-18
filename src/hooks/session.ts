import { CustomSession } from "@/context/Session";
import {
  CustomSessionContext,
  DEFAULT_VALUES,
} from "@/context/Session/context";
import { useContext, useEffect, useState } from "react";

const SESSION_NAME = "itrocasession";

export const useSession = () => {
  const { session } = useContext(CustomSessionContext);
  return { session };
};

export const saveSessionInLocalStorage = ({
  session,
}: {
  session: CustomSession["session"];
}) => {
  // update the token
  if (typeof window !== "undefined") {
    // save the token in local storage
    if (session) {
      window?.localStorage.setItem(SESSION_NAME, JSON.stringify(session));
    }
  }
};

export const useSessionInLocalStorage = () => {
  const [session, setSession] = useState<CustomSession["session"]>(
    DEFAULT_VALUES.session
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const item = window.localStorage.getItem(SESSION_NAME);

      if (item) {
        setSession(JSON.parse(item));
      }
    }
  }, []);

  return { session };
};
