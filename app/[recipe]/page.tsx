import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Ingredients from "../components/Ingredients";
import Directions from "../components/Directions";
import ContactUs from "../components/ContactUs";
import OtherRecipeBottom from "../components/OtherRecipeBottom";
// import { usePathname } from "next/navigation";

export default function Home({params}: {params: {heading:string, img: string, desc: string}}) {
  return (
    <main className="flex w-screen h-auto flex-col items-center py-10 leading-[16.94px] -tracking-[2%] ">
        <Navbar />
        <Main heading={params.heading} img={params.img} desc={params.desc}/>
        <Ingredients />
        <Directions />
        <ContactUs />
        <OtherRecipeBottom />
        <Footer/>
    </main>
  );
}
