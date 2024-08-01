import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Ingredients from "../components/Ingredients";
import Directions from "../components/Directions";
import ContactUs from "../components/ContactUs";
import OtherRecipeBottom from "../components/OtherRecipeBottom";

export default function Home({params}: {params: {recipeid: string}}) {
  return (
    <main className="flex w-screen h-auto flex-col items-center py-10 leading-[16.94px] -tracking-[2%] ">
        <Navbar />
        <Main heading={params.recipeid}/>
        <Ingredients />
        <Directions />
        <ContactUs />
        <OtherRecipeBottom />
        <Footer/>
    </main>
  );
}
