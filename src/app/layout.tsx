import { Sidebar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BoilerRest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="flex flex-row bg-background h-[100vh] justify-stretch">
        {children}
      </body>
    </html>
  );
}
