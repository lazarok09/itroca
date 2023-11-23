import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";

const inter = Inter({ subsets: ["latin"] });

import GlobalStyles from "@/styles/global";
import ToastProvider from "./toast";
import { NextSessionProvider } from "@/lib/session";
import { StyledThemeProvider } from "@/lib/theme";
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
          <ToastProvider>
            <StyledComponentsRegistry>
              <GlobalStyles />
              <StyledThemeProvider>{children}</StyledThemeProvider>
            </StyledComponentsRegistry>
          </ToastProvider>
        </NextSessionProvider>
      </body>
    </html>
  );
}
