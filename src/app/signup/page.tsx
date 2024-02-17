import { SignUpTemplate } from "@/templates/SignUp";
import { Metadata } from "next";

// either Static metadata
export const metadata: Metadata = {
  title: "iTroca | Cadastre-se",
};
export default function SignUpPage() {
  return <SignUpTemplate />;
}
