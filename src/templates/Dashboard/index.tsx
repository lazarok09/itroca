import { Header } from "@/components/Header";

import { Footer } from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { LogoImage } from "@/components/LogoImage";
import { getServerSession } from "next-auth";
import { DashboardUser } from "@/components/DashBoardUser";

export const Dashboard = async () => {
  const session = await getServerSession();
  return (
    <>
      <Header />
      <main
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
        <Heading>
          Bem vindo
          <DashboardUser> {session?.user?.name} </DashboardUser>
        </Heading>
      </main>
      <Footer />
    </>
  );
};
