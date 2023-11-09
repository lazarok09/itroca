import Link from "next/link";
import * as Styled from "./styles";
import { Suspense } from "react";

import { SignOutButton } from "../SignOutButton";
import { SignInButton } from "../SignInButton";
import { DashBoardButton } from "../DashBoardButton";
import { HeaderLink } from "../HeaderLink";

export const Header = () => {
  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderNavigation>
        <HeaderLink active={false}>
          <Link href={"/"}>Inicio</Link>
        </HeaderLink>
        <DashBoardButton />
        <SignInButton />
        <SignOutButton />
      </Styled.HeaderNavigation>
    </Styled.HeaderWrapper>
  );
};
