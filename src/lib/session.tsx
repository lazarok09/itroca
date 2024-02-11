'use server'

import { iTrocaSession } from "@/context/Session";
import { cookies } from "next/headers";

const SESSION_KEY_NAME = "itrocasession";

const cookiesStorage = cookies();

export const setServerSideSession = (session: iTrocaSession) => {
  cookiesStorage.set(SESSION_KEY_NAME, JSON.stringify(session));
};
export const getServerSideSession = (): iTrocaSession | undefined => {
  const jsonSession = cookiesStorage.get(SESSION_KEY_NAME)?.value;
  if (jsonSession) {
    return JSON.parse(jsonSession);
  }
};

export const deleteServerSideSession = () => {
  cookiesStorage.delete(SESSION_KEY_NAME);
};
