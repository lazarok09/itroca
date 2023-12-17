"use client";

import { signOut } from "../../services/auth";
import { useSession } from "../../hooks/session";

import { HeaderLink } from "../HeaderLink";

export const SignOutButton = () => {
  const handleClick = () => {
    // TODO: finish signout handler
    signOut({ token: "" });
  };
  const { session } = useSession();

  if (session.status !== "authenticated") return null;

  return (
    <HeaderLink active onClick={handleClick}>
      Deslogar
    </HeaderLink>
  );
};
