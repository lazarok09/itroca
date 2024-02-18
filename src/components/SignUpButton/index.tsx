"use client";

import { useSession } from "../../hooks/session";

import Link from "next/link";
import { HeaderLink } from "../HeaderLink";

export const SignUpButton = () => {
  const { session } = useSession();

  if (session.status === "authenticated") return null;

  return (
    <HeaderLink active={true}>
      <Link href={"/signup"}>Cadastro</Link>
    </HeaderLink>
  );
};
