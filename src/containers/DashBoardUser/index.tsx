"use client";

import { useSession } from "../../hooks/session";
import AskConfirmationBeforeSave from "@/templates/Dashboard/edit";

export const DashboardUser = () => {
  const { session } = useSession();
  const user = session?.user;
  if (session.status === "pending") return <span>Carregando...</span>;

  if (session.status === "notauthenticated")
    return <span>Volte a página de login</span>;

  return (
    <div className="flex flex-col items-center gap-4 md:gap-8  justify-center">
      <div className="flex flex-col gap-4 items-center justify-center">

        <div className="relative flex p-50 justify-center items-center gap-3 ">
          <img
            src={user.image}
            height={60}
            width={60}
            alt={`Uma fotografia de ${user.name}`}
            className="rounded-full"
          />

          <h1 className=" text-lg md:text-2xl  font-medium">
            Welcome{" "}
            <span className="capitalize   text-red-500">{user.name}</span>
          </h1>
        </div>

        <p>Interact with the items below to edit</p>
      </div>

      <div className="flex flex-row items-center justify-center">
        <AskConfirmationBeforeSave />
      </div>
    </div>
  );
};
