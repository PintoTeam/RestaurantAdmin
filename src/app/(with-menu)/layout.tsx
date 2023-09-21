import { Appbar, Sidebar } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Appbar />
      <div className="flex flex-row min-h-[92.5vh] justify-stretch bg-background-dark">
        <div className="md:basis-1/12 w-3/12 bg-background-light">
          <Sidebar />
        </div>
        <section className="basis-11/12 py-5 px-5 min-h-full overflow-auto bg-background-light rounded-tl-[40px]">
          {children}
        </section>
      </div>
    </>
  );
}
