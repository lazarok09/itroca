"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CustomSessionContext, DEFAULT_VALUES } from "./context";

import { getUser } from "@/services/itroca";

export type iTrocaSession = {
  user: iTrocaUser;
  status: "pending" | "authenticated" | "notauthenticated";
};

export interface CustomSession {
  session: iTrocaSession;
  setSession: Dispatch<SetStateAction<iTrocaSession>>;
}

export const CustomSessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // init with storage if its possible
  const [session, setSession] = useState<CustomSession["session"]>(
    DEFAULT_VALUES.session
  );

  useEffect(() => {
    async function getSessionUser() {
      try {
        const data = await getUser();
        if (data.id && data.email) {
          setSession({
            status: "authenticated",
            user: data,
          });
        } else {
          setSession({
            status: "notauthenticated",
            user: data,
          });
        }
      } catch (e) {
        console.error(e);
        setSession({
          status: "notauthenticated",
          user: DEFAULT_VALUES.session.user,
        });
      }
    }
    getSessionUser();
  }, []);
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
