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
        <div className="basis-2/12 p-4">
          <Sidebar />
        </div>
        <section className="basis-10/12 py-4 px-8 min-h-full">
          {children}
        </section>
      </body>
    </html>
  );
}
