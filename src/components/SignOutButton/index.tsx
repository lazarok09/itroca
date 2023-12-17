"use client";

import { signOut } from "next-auth/react";
import { useSession } from "../../hooks/session";

import { HeaderLink } from "../HeaderLink";

export const SignOutButton = () => {
  const handleClick = () => {
    signOut();
  };
  const { session } = useSession();

  if (session.status !== "authenticated") return null;

  return (
    <HeaderLink active onClick={handleClick}>
      Deslogar
    </HeaderLink>
  );
};
