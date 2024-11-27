import Footer from "@/sections/Footer";
import Guide from "@/sections/Guide";
import { Header } from "@/sections/Header";
import Hero from "@/sections/Hero";
import SignUp from "@/sections/SignUpSection";
import Verification from "@/sections/Verification";
import VideoBuyer from "@/sections/VideoBuyer";
import Image from "next/image";

export default function Home() {
  return (
    <>
  <Header/>
  <Hero/>
  <SignUp/>
  <VideoBuyer/>
  <Verification/>
  <Guide/>
  <Footer/>
  </>
 
  );
}
