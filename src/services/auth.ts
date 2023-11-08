import { Session } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

type DashBoardGuardProps = {
  session: Session | null;
  children: React.ReactNode;
};
export const DashBoardGuard = ({ children, session }: DashBoardGuardProps) => {
  if (!session || !session?.user.token) {
    redirect("/login");
  }

  return children;
};
