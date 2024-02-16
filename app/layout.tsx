import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Dosis } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const dosis = Dosis({ subsets: ["latin"] });

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
      <body className={dosis.className}>{children}</body>
    </html>
  );
}
