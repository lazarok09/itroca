import Link from "next/link";
import * as Styled from "./styles";
import { Suspense } from "react";

import { SignOutButton } from "../SignOutButton";
import { SignInButton } from "../SignInButton";
import { DashBoardButton } from "../DashBoardButton";

export const Header = () => {
  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderNavigation>
        <Suspense>
          <Styled.HeaderLink active={false}>
            <Link href={"/"}>Inicio</Link>
          </Styled.HeaderLink>
        </Suspense>
        <DashBoardButton />
        <SignInButton />
        <SignOutButton />
      </Styled.HeaderNavigation>
    </Styled.HeaderWrapper>
  );
};
