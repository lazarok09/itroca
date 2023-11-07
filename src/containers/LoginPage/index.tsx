"use client";
import { LoginForm } from "@/components/LoginForm";

import {
  LoginCard,
  LoginCardHeading,
  LoginCardItems,
  LoginFormAlterLink,
  LoginFormOtherOptions,
  LoginFormSeparator,
  LoginPageContainerWrapper,
} from "./styles";

import { Heading } from "@/components/Heading";
import Link from "next/link";

export const LoginPageContainer = () => {
  return (
    <LoginPageContainerWrapper>
      <LoginCard>
        <LoginCardHeading>
          <Heading>Login</Heading>
        </LoginCardHeading>
        <LoginCardItems>
          <LoginForm />
          <LoginFormOtherOptions>
            <LoginFormSeparator />
            <LoginFormAlterLink>
              <Link href={"/"}>Cadastre-se</Link>
            </LoginFormAlterLink>
            <LoginFormAlterLink>
              <Link href={"/"}>Esqueci a senha</Link>
            </LoginFormAlterLink>
          </LoginFormOtherOptions>
        </LoginCardItems>
      </LoginCard>
    </LoginPageContainerWrapper>
  );
};
