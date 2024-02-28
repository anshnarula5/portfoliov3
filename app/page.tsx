import Content from "./components/Content";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="w-full flex gap-1 text-slate-400">
      <Hero />
      <Content />
    </main>
  );
}
