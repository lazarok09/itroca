"use client";

import { LoginForm } from "@/components/LoginForm";
import { FormEvent, useState } from "react";

import {
  LoginCard,
  LoginCardHeading,
  LoginCardItems,
  LoginFormAlterLink,
  LoginFormOtherOptions,
  LoginFormSeparator,
  LoginPageWrapper,
} from "./styles";

import { Heading } from "@/components/Heading";
import Link from "next/link";

export const LoginPageContainer = () => {
  const [submiting, setSubmiting] = useState(false);
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    setSubmiting(true);

    setSubmiting(false);
    return;
  }
  return (
    <LoginPageWrapper>
      <LoginCard>
        <LoginCardHeading>
          <Heading>Login</Heading>
        </LoginCardHeading>
        <LoginCardItems>
          <LoginForm submiting={submiting} handleSubmit={handleSubmit} />
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
    </LoginPageWrapper>
  );
};
