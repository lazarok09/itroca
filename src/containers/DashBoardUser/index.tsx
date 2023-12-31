"use client";

import { useSession } from "../../hooks/session";

import Image from "next/image";

export const DashboardUser = () => {
  const { session } = useSession();
  const user = session?.user;
  if (session.status === "pending") return <span>Carregando...</span>;

  if (session.status === "notauthenticated")
    return <span>Volte a página de login</span>;

  return (
    <div className="relative flex p-50 justify-center items-center gap-3 ">
      <Image
        src={"https://avatars.githubusercontent.com/u/45147892?v=4"}
        height={60}
        width={60}
        alt={`Uma fotografia de ${user.name}`}
        className="rounded-full"
      />
      <p className="capitalize">
        {" "}
        Olá <span className="text-red-500">{user.name}</span>
      </p>
    </div>
  );
};
