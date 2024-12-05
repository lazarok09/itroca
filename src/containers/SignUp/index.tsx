import { SignCardHeading } from "@/components/LoginCardHeading";

import Link from "next/link";
import { SignUpFormContainer } from "../SignUpForm";

export function SignUpPageContainer() {
  return (
    <main className="flex justify-center mt-20">
      <div className="rounded-b-xl shadow-md h-min">
        <SignCardHeading text="Cadastre-se" />
        <SignUpFormContainer />
      </div>
    </main>
  );
}
