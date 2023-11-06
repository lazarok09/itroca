"use client";

import { LoginForm } from "@/components/LoginForm";
import { FormEvent, useState } from "react";

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
    <div>
      <LoginForm submiting={submiting} handleSubmit={handleSubmit}></LoginForm>
    </div>
  );
};
