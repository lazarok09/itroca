"use client";

import { signOut, useSession } from "next-auth/react";
import * as Styled from "../Header/styles";

export const SignOutButton = () => {
  const handleClick = () => {
    signOut();
  };
  const session = useSession();

  if (session.status !== "authenticated") return null;

  return (
    <Styled.HeaderLink active onClick={handleClick}>
      Deslogar
    </Styled.HeaderLink>
  );
};
