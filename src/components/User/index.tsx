"use client";

import { signOut } from "next-auth/react";
import * as Styled from "../Header/styles";

export const SignOutButton = () => {
  const handleClick = () => {
    signOut();
  };
  return (
    <Styled.HeaderLink active onClick={handleClick}>
      Deslogar
    </Styled.HeaderLink>
  );
};
