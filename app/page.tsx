"use client"
import AppSEO from "./components/AppSeo";
import Content from "./components/Content";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <AppSEO />
      <main className="w-full flex flex-col lg:flex-row gap-1 text-slate-400 px-5 xl:px-0 relative" >
        <Hero />
        <Content />
      </main>
    </>
  );
}

