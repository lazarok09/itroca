import { redirect } from "next/navigation";
import React from "react";

type DashBoardGuardProps = {
  session: any;
  children: React.ReactNode;
};
export const DashBoardGuard = ({ children, session }: DashBoardGuardProps) => {
  if (!session || !session?.user) {
    redirect("/login");
  }

  return children;
};

