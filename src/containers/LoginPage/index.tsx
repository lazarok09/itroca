import { LoginForm } from "@/components/LoginForm";

import Link from "next/link";
import { LoginCardHeading } from "@/components/LoginCardHeading";

export const LoginPageContainer = () => {
  return (
    <main className="flex justify-center mt-20">
      <div className="rounded-b-xl shadow-md h-min">
        <LoginCardHeading />
        <section className="flex-col gap-3 p-4">
          <LoginForm />
          <div className="flex-col">
            <hr />
            <div>
              <Link className="underline" href={"/"}>
                Cadastre-se
              </Link>
            </div>
            <div>
              <Link className="underline" href={"/"}>
                Esqueci a senha
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
