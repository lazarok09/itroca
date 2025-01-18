import { SignUpPageContainer } from "@/containers/SignUp";

import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import { FooterBottomNavigation } from "@/components/BottomNavigation";
import HeaderContainer from "@/containers/Header";
// either Static metadata
export const metadata: Metadata = {
  title: "iTroca | cadsatre-se2",
};

export const SignUpTemplate = () => {
  return (
    <div
      className="
        min-h-screen
        text-bg
        "
    >
      <HeaderContainer />
      <div data-testid="signup " className="min-h-[90vh] ">
        <main className="flex justify-center pb-20 pt-20 ">
          <SignUpPageContainer />
        </main>
      </div>
      <FooterBottomNavigation />
    </div>
  );
};
