"use client";

import { signOut, useSession } from "next-auth/react";
import { HeaderLink } from "../HeaderLink";

export const SignOutButton = () => {
  const handleClick = () => {
    signOut();
  };
  const session = useSession();

  if (session.status !== "authenticated") return null;

  return (
    <HeaderLink active onClick={handleClick}>
      Deslogar
    </HeaderLink>
  );
};
