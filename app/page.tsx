import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Recipes from "./components/Recipes";
import LearnMore from "./components/LearnMore";

export default function Home() {
  return (
    <main className="flex w-screen h-auto flex-col items-center py-10 px-20 leading-[16.94px] -tracking-[2%] ">
      <Navbar />
      <Hero />
      <Category />
      <Recipes />
      <LearnMore />
    </main>
  );
}
