"use client";

import { Header } from "@/components/Header";

import { HomeWrapper, MainWrapper } from "./styles";

import { HomePresentation } from "@/components/HomePresentation";

export const Home = () => {
  return (
    <>
      <Header />
      <HomeWrapper>
        <MainWrapper>
          <HomePresentation />
        </MainWrapper>
      </HomeWrapper>
    </>
  );
};
