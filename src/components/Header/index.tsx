import Link from "next/link";
import { HeaderLink, HeaderNavigation, HeaderWrapper } from "./styles";
import { Suspense } from "react";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderNavigation>
        <Suspense>
          <HeaderLink active={false}>
            <Link href={"/"}>Inicio</Link>
          </HeaderLink>
        </Suspense>
        <Suspense>
          <HeaderLink active>
            <Link href={"/login"}>Login</Link>
          </HeaderLink>
        </Suspense>
      </HeaderNavigation>
    </HeaderWrapper>
  );
};
