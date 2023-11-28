import { Header } from "@/components/Header";

import { Footer } from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { LogoImage } from "@/components/LogoImage";
import { getServerSession } from "next-auth";
import { DashboardUser } from "@/components/DashBoardUser";
import { getUsers } from "@/services/itroca";

export const Dashboard = async () => {
  const session = await getServerSession();
  const users = await getUsers();
  return (
    <>
      <Header />
      <main>
        <div className="flex ">
          <div className="pl-4">
            <DashboardUser
              user={users.find((user) => user.email === session?.user.email)}
            />
          </div>
        </div>
      </main>
      <header
        className="
        min-h-screen 
        flex
        font-mono;
        h-full
        justify-center
        items-center
        gap-2
    "
      >
        <LogoImage />

        <Heading>Bem vindo</Heading>
      </header>
      <Footer />
    </>
  );
};
