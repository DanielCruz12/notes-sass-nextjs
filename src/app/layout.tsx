import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { NavbarV0 } from "@/components/navbar";
import { FooterV0 } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notes-sass",
  description: "Sass application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <NextTopLoader />
        <NavbarV0 />
        {children}
        <FooterV0 />
      </body>
    </html>
  );
}
