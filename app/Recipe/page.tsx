import Image from "next/image";
import Navbar from "../Hompage/Navbar";
import Footer from "../Hompage/Footer";

export default function Home() {
  return (
    <main className="flex w-screen h-auto flex-col items-center py-10 leading-[16.94px] -tracking-[2%] ">
        <Navbar />
        <Footer/>
    </main>
  );
}
