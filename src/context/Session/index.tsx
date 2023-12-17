"use client";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { CustomSessionContext, DEFAULT_VALUES } from "./context";

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
  const [session, setSession] = useState<CustomSession>(DEFAULT_VALUES.session);

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
