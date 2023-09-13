import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "auto",
});

interface Props {
  className?: string;
}

export function Logo({ className }: Props) {
  const gradientStyle = {
    background: `linear-gradient(45deg, #40b974, #804CE4)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div
      className={`${inter.className} ${className ?? "text-4xl text-center"}`}
    >
      <h1 className="font-thin text-primary-500">VIVATO</h1>
    </div>
  );
}
