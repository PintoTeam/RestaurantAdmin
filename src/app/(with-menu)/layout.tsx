import { Sidebar } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="basis-2/12">
        <Sidebar />
      </div>
      <section className="basis-10/12 py-5 px-8 min-h-full">{children}</section>
    </>
  );
}
