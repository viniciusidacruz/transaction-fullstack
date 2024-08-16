import type { Metadata } from "next";
import { Inter } from "next/font/google";

import StyledComponentsRegistry from "@/shared/lib";
import { StyledComponentProvider } from "@/shared/providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Transaction FullStack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <StyledComponentProvider>{children}</StyledComponentProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
