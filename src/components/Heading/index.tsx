import React from "react";
import * as Styled  from "./styles";

type Props = {
  children: React.ReactNode;
};
export const Heading = ({ children }: Props) => {
  return (
    <Styled.HeadingWrapper>
      <h1>{children}</h1>
    </Styled.HeadingWrapper>
  );
};
