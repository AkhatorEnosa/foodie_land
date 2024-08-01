import Image from "next/image";
// import Navbar from "./components/Home/Navbar";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Category from "./Category";
import Recipes from "./Recipes";
import LearnMore from ".//LearnMore";
import InstaPosts from "./InstaPosts";
import MoreRecipe from "./MoreRecipe";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

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
