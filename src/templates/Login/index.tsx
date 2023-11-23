import { Header } from "@/components/Header";
import { LoginPageContainer } from "@/containers/LoginPage";

import { Footer } from "@/components/Footer";
import { Metadata } from "next";
// either Static metadata
export const metadata: Metadata = {
  title: "iTroca | Login",
};

export const Login = () => {
  return (
    <>
      <Header />
      <div
        className="
         min-h-screen
         text-bg
      "
      >
        <LoginPageContainer />
      </div>
      <Footer />
    </>
  );
};
