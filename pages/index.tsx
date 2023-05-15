import { useEffect } from "react";
import AOS from "aos";
import Navbar from "@/components/organisme/Navbar";
import MainBanner from "@/components/organisme/MainBanner";
import TransactionStep from "@/components/organisme/TransactionStep";
import FeaturedGame from "@/components/organisme/FeaturedGame";
import Reached from "@/components/organisme/Reached";
import Story from "@/components/organisme/Story";
import Footer from "@/components/organisme/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
