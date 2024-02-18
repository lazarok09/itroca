import Link from "next/link";

import { SignOutButton } from "../SignOutButton";
import { SignInButton } from "../SignInButton";
import { DashBoardButton } from "../DashBoardButton";
import { HeaderLink } from "../HeaderLink";
import { ProductsButton } from "../ProductsButton";
import { SignUpButton } from "../SignUpButton";

export const Header = () => {
  return (
    <header
      className="
       flex flex-1 items-center
       sticky top-0 
       px-4 
       justify-end
    "
    >
      <nav
        className="
          flex
          justify-center
          items-center
          gap-4
          self-end
          m-1
    
      "
      >
        <HeaderLink active={false}>
          <Link href={"/"}>Inicio</Link>
        </HeaderLink>
        <DashBoardButton />
        <ProductsButton />
        <SignInButton />
        <SignUpButton />
        <SignOutButton />
      </nav>
    </header>
  );
};
