"use client";

import { Header } from "@/components/Header";

import { HomeWrapper, MainWrapper } from "./styles";

import { HomePresentation } from "@/components/HomePresentation";
import Head from "next/head";

enum metadata {
  title = "I Troca",
  description = "Troque seu telefone por outro, compras avaliações e muito mais !",
}
export const Home = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Header />
      <HomeWrapper>
        <MainWrapper>
          <HomePresentation />
        </MainWrapper>
      </HomeWrapper>
    </>
  );
};
