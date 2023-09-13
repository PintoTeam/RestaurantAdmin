import { useStore } from "@/store";

export default function Home() {
  const { user } = useStore();
  return (
    <main className="w-full min-h-full text-left flex flex-col pt-5 font-semibold">
      <h1 className="m-auto text-5xl">Hello, {user?.name}!</h1>
    </main>
  );
}
