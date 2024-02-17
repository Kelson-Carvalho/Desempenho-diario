import type { Metadata } from "next";
import { Dosis, Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dosis = Dosis({ subsets: ["latin"], variable: "--font-dosis" });

export const metadata: Metadata = {
  title: "Desempenho Diário",
  description: "Gerencie seus desfios facil e prático",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dosis.variable} ${inter.variable} flex flex-col items-center mt-10 bg-neutral-900`}>
        <Image src="/images/logo.svg" width={250} height={250} alt="Logo Desempenho Diário" />
        {children}</body>
    </html>
  );
}
