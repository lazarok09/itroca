
import { Footer } from "@/components/Footer";
import { LogoImage } from "@/components/LogoImage";
import { DashboardUser } from "@/containers/DashBoardUser";
import { FooterBottomNavigation } from "@/components/BottomNavigation";
import HeaderContainer from "@/containers/Header";

export const Dashboard = async () => {
  return (
    <div className="min-h-screen ">
      <HeaderContainer />
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
      <FooterBottomNavigation />
    </div>
  );
};
