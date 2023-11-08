import { Header } from "@/components/Header";

import * as Styled from "./styles";

import { HomePresentation } from "@/components/HomePresentation";
import { Footer } from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { LogoImage } from "@/components/LogoImage";

export const Home = () => {
  return (
    <>
      <Header />
      <Styled.HomeWrapper>
        <Styled.MainWrapper>
          <LogoImage />
          <Heading>Bem vindo</Heading>
        </Styled.MainWrapper>
      </Styled.HomeWrapper>
      <Footer />
    </>
  );
};
