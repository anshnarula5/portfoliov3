import Content from "./components/Content";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="bg-green-300 w-full flex gap-1">
      <Hero />
      <Content />
    </main>
  );
}
