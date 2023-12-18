"use client";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { CustomSessionContext, DEFAULT_VALUES } from "./context";
import {
  saveSessionInLocalStorage,
  useSessionInLocalStorage,
} from "@/hooks/session";

interface Session {
  user: iTrocaUser;
  accessToken: string;
  status: "pending" | "authenticated";
}

export interface CustomSession {
  session: Session;
  setSession: Dispatch<SetStateAction<Session>>;
}

export const CustomSessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { session: sessionInLocalStorage } = useSessionInLocalStorage();

  // init with storage if its possible
  const [session, setSession] = useState<CustomSession["session"]>(
    sessionInLocalStorage
  );

  // if updated session, save to local storage that update
  useEffect(() => {
    if (session.status === "authenticated") {
      saveSessionInLocalStorage({ session });
    }
  }, [session]);

  useEffect(() => {
    setSession(sessionInLocalStorage);
  }, [sessionInLocalStorage]);

  return (
    <CustomSessionContext.Provider
      value={{
        session: session,
        setSession: setSession,
      }}
    >
      {children}
    </CustomSessionContext.Provider>
  );
};
