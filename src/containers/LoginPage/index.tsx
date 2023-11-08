"use client";
import { LoginForm } from "@/components/LoginForm";

import * as Styled from "./styles";

import Link from "next/link";
import { LoginCardHeading } from "@/components/LoginCardHeading";

export const LoginPageContainer = () => {
  return (
    <Styled.LoginPageContainerWrapper>
      <Styled.LoginCard>
        <LoginCardHeading />
        <Styled.LoginCardItems>
          <LoginForm />
          <Styled.LoginFormOtherOptions>
            <Styled.LoginFormSeparator />
            <Styled.LoginFormAlterLink>
              <Link href={"/"}>Cadastre-se</Link>
            </Styled.LoginFormAlterLink>
            <Styled.LoginFormAlterLink>
              <Link href={"/"}>Esqueci a senha</Link>
            </Styled.LoginFormAlterLink>
          </Styled.LoginFormOtherOptions>
        </Styled.LoginCardItems>
      </Styled.LoginCard>
    </Styled.LoginPageContainerWrapper>
  );
};
