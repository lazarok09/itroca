import { Header } from "@/components/Header";

import { Footer } from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { LogoImage } from "@/components/LogoImage";
import { Fragment } from "react";

export const Home = () => {
  return (
    <Fragment>
      <Header />

      <div
        className="min-h-screen    display: flex;
          flex
          font-mono
          h-full
          justify-center
          items-center
          gap-1"
      >
        <LogoImage />
        <Heading>iTroca </Heading>
      </div>

      <Footer />
    </Fragment>
  );
};
