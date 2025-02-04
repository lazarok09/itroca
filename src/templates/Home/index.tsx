import { FooterBottomNavigation } from "@/components/BottomNavigation";
import HeaderContainer from "@/containers/Header";
import { MainHome } from "@/components/MainHome";

export const Home = () => {
  return (
    <div className="min-h-screen h-full">
      <HeaderContainer />
      <MainHome />

      <FooterBottomNavigation />
    </div>
  );
};
