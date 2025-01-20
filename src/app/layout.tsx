import { Roboto } from "next/font/google";

import ToastProvider from "./toast";

import "./global.css";
import { CustomSessionProvider } from "@/context/Session";
import NProgressProvider from "./nprogress";
import { CustomDialogProvider } from "@/context/Dialog";

const roboto = Roboto({
  preload: true,
  subsets: ["cyrillic"],
  weight: "400",
  variable: "--font-roboto"
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <NProgressProvider />
        <CustomSessionProvider>
          <CustomDialogProvider>
            <ToastProvider>{children}</ToastProvider>
          </CustomDialogProvider>
        </CustomSessionProvider>
      </body>
    </html>
  );
}
