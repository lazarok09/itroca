import { iTrocaSession } from "@/context/Session";
import { redirect } from "next/navigation";
import React from "react";

type DashBoardGuardProps = {
  session: iTrocaSession  | undefined;
  children: React.ReactNode;
};
export const DashBoardGuard = ({ children, session }: DashBoardGuardProps) => {
  if (!session || session.status !== "authenticated") {
    redirect("/login");
    return;
  }

  return children;
};
