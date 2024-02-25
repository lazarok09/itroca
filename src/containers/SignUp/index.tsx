import { SignCardHeading } from "@/components/LoginCardHeading";

import Link from "next/link";
import { SignUpFormContainer } from "../SignUpForm";

export function SignUpPageContainer() {
  return (
    <main className="flex justify-center mt-20">
      <div className="rounded-b-xl shadow-md h-min">
        <SignCardHeading text="Cadastre-se" />
        <section className="flex-col gap-3 p-4">
          <SignUpFormContainer />
          <div className="flex-col">
            <hr />
            <div>
              <Link className="underline" href={"/sign"}>
                Login
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
