"use client";

import { AvatarUser } from "@/components/AvatarUser";
import { useSession } from "../../hooks/session";
import AskConfirmationBeforeSave from "@/templates/Dashboard/edit";
import Link from "next/link";

export const DashboardUser = () => {
  const { session } = useSession();
  const user = session?.user;
  if (session.status === "pending") {
    return <span>Carregando...</span>;
  }

  if (session.status === "notauthenticated") {
    return (
      <div
        data-testid="dialog-not-auth"
        className="flex flex-col items-center gap-4"
      >
        <h2 className="text-gray-900  text-4xl font-bold">
          Sorry, you are not authenticated
        </h2>
        <p className="text-xl max-w-2xl text-center">
          I need you to sign up to get full access to your own personalized
          dashboard There you can manage your products, and more
        </p>

        <div className="flex gap-2 justify-center align-center flex-1 w-56">
          <Link
            href="/signup"
            className="
            bg-transparent
            outline

            text-black font-bold
             py-2
             min-w-full
            flex items-center justify-center
            rounded-md text-center"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="
            bg-blue-500
            text-white font-bold
            min-w-full
            py-2
            flex items-center justify-center
            rounded-md text-center"
          >
            Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4 md:gap-8  justify-center">
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="relative flex p-50 justify-center items-center gap-3 ">
          <AvatarUser />

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
