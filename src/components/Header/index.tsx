
import { SignOutButton } from "../SignOutButton";
import { SignInButton } from "../SignInButton";
import { DashBoardButton } from "../DashBoardButton";
import { ProductsButton } from "../ProductsButton";
import { SignUpButton } from "../SignUpButton";
import { Fragment } from "react";
import HeaderAppBar from "../AppBar";

export const Header = () => {
  return (
    <header
      className="
       flex flex-1 items-center
       sticky top-0 
       justify-end
    "
    >
      <HeaderAppBar />
    </header>
  );
};
// TODO: create equal options for mobile and desktop
const HeaderDesktop = () => {
  return (
    <Fragment>
      <DashBoardButton />
      <ProductsButton />
      <SignInButton />
      <SignUpButton />
      <SignOutButton />
    </Fragment>
  );
};
