import { Header } from "@/components/Header";
import { SignUpPageContainer } from "@/containers/SignUp";

import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import { FooterBottonNavigation } from "@/components/BottonNavigation";
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
      <Header />
      <div data-testid="signup " className="min-h-[90vh] ">
        <main className="flex justify-center pb-20 pt-20 ">
          <SignUpPageContainer />
        </main>
      </div>
      <FooterBottonNavigation />
    </div>
  );
};
