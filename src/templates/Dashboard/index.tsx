import { Header } from "@/components/Header";

import * as Styled from "@/templates/Home/styles";

import { Footer } from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { LogoImage } from "@/components/LogoImage";

export const Dashboard = () => {
  return (
    <>
      <Header />
      <Styled.HomeWrapper>
        <Styled.MainWrapper>
          <LogoImage />
          <Heading>Bem vindo ao dashboard</Heading>
        </Styled.MainWrapper>
      </Styled.HomeWrapper>
      <Footer />
    </>
  );
};
