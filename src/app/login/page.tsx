
import { Login } from "@/templates/Login";
import { Metadata } from "next";


// either Static metadata
export const metadata: Metadata = {

  title: "iTroca | Login",
};
export default function LoginPage() {
  return (
      <Login />
  );
}
