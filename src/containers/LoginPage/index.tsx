import Link from "next/link";
import { SignCardHeading } from "@/components/LoginCardHeading";
import { LoginFormContainer } from "../LoginForm";

export const LoginPageContainer = () => {
  return (
    <main className="flex justify-center mt-20">
      <div className="rounded-b-xl shadow-md h-min">
        <SignCardHeading text="Login" />
        <section className="flex-col gap-3 p-4">
          <LoginFormContainer />
          <div className="flex-col">
            <hr />
            <div>
              <Link className="underline" href={"/signup"}>
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
