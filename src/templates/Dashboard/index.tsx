import { Header } from "@/components/Header";

import { Footer } from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { LogoImage } from "@/components/LogoImage";
import { DashboardUser } from "@/containers/DashBoardUser";

export const Dashboard = async () => {
  return (
    <div className="min-h-screen ">
      <Header />
      <main>
        <div className="flex ">
          <div className="pl-4">
            <DashboardUser />
          </div>
        </div>
      </main>
      <div
        className="
        
        flex
        font-mono;
        h-full
        justify-center
        items-center
        gap-2
    "
      >
        <LogoImage />

        
      </div>
      <Footer />
    </div>
  );
};
