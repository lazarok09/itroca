"use client";

import { SignCardHeading } from "@/components/LoginCardHeading";

import Link from "next/link";
import { SignUpFormContainer } from "../SignUpForm";
import { useEffect, useRef } from "react";

export function SignUpPageContainer() {
  const signupRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (signupRef.current) {
      signupRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [signupRef]);

  return (
    <div className="rounded-b-xl shadow-md h-min" ref={signupRef}>
      <SignCardHeading text="Cadastre-se" />
      <SignUpFormContainer />
    </div>
  );
}
