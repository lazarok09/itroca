import { Header } from "@/components/Header";

import * as Styled from "./styles";

import { Footer } from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { LogoImage } from "@/components/LogoImage";
import { getServerSession } from "next-auth";

export const Dashboard = async () => {
  const session = await getServerSession();
  return (
    <>
      <Header />
      <Styled.DashboardWrapper>
        <Styled.MainWrapper>
          <LogoImage />
          <Heading>
            Bem vindo
            <Styled.DashBoardUser> {session?.user?.name} </Styled.DashBoardUser>
          </Heading>
        </Styled.MainWrapper>
      </Styled.DashboardWrapper>
      <Footer />
    </>
  );
};
