import Image from "next/image";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import MoreRecipe from "./components/MoreRecipe";
import InstaPosts from "./components/InstaPosts";
import LearnMore from "./components/LearnMore";
import Recipes from "./components/Recipes";
import Category from "./components/Category";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex w-screen h-auto flex-col items-center py-10 leading-[16.94px] -tracking-[2%] ">
      <Navbar />
      <Hero />
      <Category />
      <Recipes />
      <LearnMore />
      <InstaPosts />
      <MoreRecipe />
      <ContactUs />
      <Footer />
    </main>
  );
}
