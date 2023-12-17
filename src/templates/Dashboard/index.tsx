import { Header } from "@/components/Header";

import { Footer } from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { LogoImage } from "@/components/LogoImage";
import { DashboardUser } from "@/components/DashBoardUser";

export const Dashboard = async () => {
  return (
    <>
      <Header />
      <main>
        <div className="flex ">
          <div className="pl-4">
            <DashboardUser />
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
