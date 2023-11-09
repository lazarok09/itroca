import React, { HTMLAttributes } from "react";
import * as Styled from "./styles";
type HeaderLinkProps = {
  children: React.ReactNode;
  active: boolean;
} & HTMLAttributes<HTMLDivElement>;
export const HeaderLink = ({ children, active, ...rest }: HeaderLinkProps) => {
  return (
    <Styled.HeaderLinkWrapper className={active ? "active" : ""} {...rest}>
      {children}
    </Styled.HeaderLinkWrapper>
  );
};
