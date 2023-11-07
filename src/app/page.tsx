import { Home } from "@/templates/Home";

import { Metadata } from "next";

// either Static metadata
export const metadata: Metadata = {
  title: "iTroca | Calculadora grátis de avaliação de IPhone",
};

export default function App() {
  return <Home />;
}
