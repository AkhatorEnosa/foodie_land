import Image from "next/image";
import Footer from "./Hompage/Footer";
import ContactUs from "./Hompage/ContactUs";
import MoreRecipe from "./Hompage/MoreRecipe";
import InstaPosts from "./Hompage/InstaPosts";
import LearnMore from "./Hompage/LearnMore";
import Recipes from "./Hompage/Recipes";
import Category from "./Hompage/Category";
import Hero from "./Hompage/Hero";
import Navbar from "./Hompage/Navbar";

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
