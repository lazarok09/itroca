import { Header } from "@/components/Header";
import { LoginPageContainer } from "@/containers/LoginPage";
import { LoginPageWrapper } from "./styles";
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
      <LoginPageWrapper>
        <LoginPageContainer />
      </LoginPageWrapper>
      <Footer />
    </>
  );
};
