import { Session } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { API_URL } from "./itroca";

type DashBoardGuardProps = {
  session: Session | null;
  children: React.ReactNode;
};
export const DashBoardGuard = ({ children, session }: DashBoardGuardProps) => {
  if (!session || !session?.user) {
    redirect("/login");
  }

  return children;
};

export const authorizeUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<ITrocarUserCredentials> => {
  const body = {
    email,
    password,
  };
  const options: RequestInit = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  };
  const LOCAL_API = `api`;
  const response = await fetch(`${LOCAL_API}`, options);
  const data: ITrocarUserCredentials = await response.json();
  return data;
};
