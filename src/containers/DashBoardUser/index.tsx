"use client";

import { UserAvatar } from "@/components/UserAvatar";
import { useSession } from "../../hooks/session";
import { Button } from "@mui/material";

export const DashboardUser = () => {
  const { session } = useSession();
  const user = session?.user;
  if (session.status === "pending") return <span>Carregando...</span>;

  if (session.status === "notauthenticated")
    return <span>Volte a página de login</span>;

  return (
    <div>
      <UserAvatar user={user} />
      <h1>Vamos começar cadastrando alguns produtos ?</h1>
      <Button variant="outlined" color="success">
        Começar
      </Button>
    </div>
  );
};
