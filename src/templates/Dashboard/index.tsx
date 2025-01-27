import { DashboardUser } from "@/containers/DashBoardUser";
import { FooterBottomNavigation } from "@/components/BottomNavigation";

import HeaderContainer from "@/containers/Header";

export const Dashboard = async () => {
  return (
    <div className="min-h-screen ">
      <HeaderContainer />
      <main>
        <div className="flex justify-center p-8 md:p-16">
          <div className="pl-4">
            <DashboardUser />
          </div>
        </div>
      </main>

      <FooterBottomNavigation />
    </div>
  );
};
