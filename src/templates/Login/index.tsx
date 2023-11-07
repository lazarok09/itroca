import { Header } from "@/components/Header";
import { LoginPageContainer } from "@/containers/LoginPage";
import { LoginPageWrapper } from "./styles";
import { Footer } from "@/components/Footer";

export const LoginPage = () => {
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
