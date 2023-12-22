"use client";

import { signOut } from "@/services/itroca";
import { useSession } from "../../hooks/session";

import { HeaderLink } from "../HeaderLink";
import { useContext } from "react";
import {
  CustomSessionContext,
  DEFAULT_VALUES,
} from "@/context/Session/context";

export const SignOutButton = () => {
  const { setSession } = useContext(CustomSessionContext);
  const { session } = useSession();
  
  const handleClick = async () => {
    // TODO: finish signout handler
    await signOut();
    setSession(DEFAULT_VALUES as any);
  };

  if (session.status !== "authenticated") return null;

  return (
    <HeaderLink active onClick={handleClick}>
      Deslogar
    </HeaderLink>
  );
};
