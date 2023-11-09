"use client";

import { useSession } from "next-auth/react";
import * as Styled from "../Header/styles";
import Link from "next/link";

export const SignInButton = () => {
  const session = useSession();

  if (session.status === "authenticated") return null;

  return (
    <Styled.HeaderLink active>
      <Link href={"/login"}>Login</Link>
    </Styled.HeaderLink>
  );
};
