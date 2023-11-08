import { Header } from "@/components/Header";

import * as Styled  from "./styles";

import { HomePresentation } from "@/components/HomePresentation";
import { Footer } from "@/components/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <Styled.HomeWrapper>
        <Styled.MainWrapper>
          <HomePresentation />
        </Styled.MainWrapper>
      </Styled.HomeWrapper>
      <Footer />
    </>
  );
};
