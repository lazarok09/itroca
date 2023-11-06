import React from "react";
import { HeadingWrapper } from "./styles";

type Props = {
  children: React.ReactNode;
};
export const Heading = ({ children }: Props) => {
  return (
    <HeadingWrapper>
      <h1>{children}</h1>
    </HeadingWrapper>
  );
};
