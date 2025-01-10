import { Header } from "@/components/Header";
import { LoginPageContainer } from "@/containers/LoginPage";

import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import { FooterBottomNavigation } from "@/components/BottomNavigation";
// either Static metadata
export const metadata: Metadata = {
  title: "iTroca | Login",
};

export const Login = () => {
  return (
    <div
      className="
         min-h-screen
         text-bg
      "
    >
      <Header />
      <div
        data-testid="login"
        className="flex place-items-center justify-center min-h-[80vh]"
      >
        <LoginPageContainer />
      </div>
      <FooterBottomNavigation />
    </div>
  );
};
