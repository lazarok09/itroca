import { Header } from "@/components/Header";

import { HomeWrapper, MainWrapper } from "./styles";

import { HomePresentation } from "@/components/HomePresentation";
import { Footer } from "@/components/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <HomeWrapper>
        <MainWrapper>
          <HomePresentation />
        </MainWrapper>
      </HomeWrapper>
      <Footer />
    </>
  );
};
