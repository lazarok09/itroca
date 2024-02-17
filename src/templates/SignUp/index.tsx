import { Header } from "@/components/Header";
import { SignUpPageContainer } from "@/containers/SignUp";

import { Footer } from "@/components/Footer";
import { Metadata } from "next";
// either Static metadata
export const metadata: Metadata = {
  title: "iTroca | cadsatre-se2",
};

export const SignUpTemplate = () => {
  return (
    <>
      <Header />
      <div
        className="
         min-h-screen
         text-bg
      "
      >
        <SignUpPageContainer />
      </div>
      <Footer />
    </>
  );
};
