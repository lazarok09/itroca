"use client";

import { UserAvatar } from "@/components/UserAvatar";
import { useSession } from "../../hooks/session";

export const DashboardUser = () => {
  const { session } = useSession();
  const user = session?.user;
  if (session.status === "pending") return <span>Carregando...</span>;

  if (session.status === "notauthenticated")
    return <span>Volte a página de login</span>;

  return <UserAvatar user={user} />;
};
