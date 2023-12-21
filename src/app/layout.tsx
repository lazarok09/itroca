import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import ToastProvider from "./toast";

import "./global.css";
import { CustomSessionProvider } from "@/context/Session";
import CookieProvider from "./cookies";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <CookieProvider>
          <CustomSessionProvider>
            <ToastProvider>{children}</ToastProvider>
          </CustomSessionProvider>
        </CookieProvider>
      </body>
    </html>
  );
}
