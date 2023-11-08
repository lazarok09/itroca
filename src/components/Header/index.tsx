import Link from "next/link";
import * as Styled from "./styles";
import { Suspense } from "react";

import { SignOutButton } from "../User";

export const Header = () => {
  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderNavigation>
        <Suspense>
          <Styled.HeaderLink active={false}>
            <Link href={"/"}>Inicio</Link>
          </Styled.HeaderLink>
        </Suspense>
        <Suspense>
          <Styled.HeaderLink active>
            <Link href={"/login"}>Login</Link>
          </Styled.HeaderLink>
        </Suspense>
        <SignOutButton />
      </Styled.HeaderNavigation>
    </Styled.HeaderWrapper>
  );
};
