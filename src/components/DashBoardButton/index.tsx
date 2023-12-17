"use client";

import { useSession } from "../../hooks/session";
import Link from "next/link";
import { HeaderLink } from "../HeaderLink";

export const DashBoardButton = () => {
  const { session } = useSession();

  if (session?.status !== "authenticated") return null;

  return (
    <HeaderLink active={true}>
      <Link href={"/dashboard"}>Dashboard</Link>
    </HeaderLink>
  );
};
