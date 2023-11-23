import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import ToastProvider from "./toast";
import { NextSessionProvider } from "@/lib/session";

import { getServerSession } from "next-auth";

import "./global.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <NextSessionProvider session={session}>
          <ToastProvider>{children}</ToastProvider>
        </NextSessionProvider>
      </body>
    </html>
  );
}
