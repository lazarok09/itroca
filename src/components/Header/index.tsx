import Link from "next/link";

import { SignOutButton } from "../SignOutButton";
import { SignInButton } from "../SignInButton";
import { DashBoardButton } from "../DashBoardButton";
import { HeaderLink } from "../HeaderLink";
import { ProductsButton } from "../ProductsButton";
import { SignUpButton } from "../SignUpButton";
import { Fragment, useState } from "react";
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
