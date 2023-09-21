import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vivato",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "auto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={spaceGrotesk.className}>
      <body className="flex flex-col bg-background">{children}</body>
    </html>
  );
}
