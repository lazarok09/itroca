import { Header } from "@/components/Header";
import { LoginPageContainer } from "@/containers/LoginPage";
import { LoginPageWrapper } from "./styles";

export const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <Header />
      <LoginPageContainer />
    </LoginPageWrapper>
  );
};
