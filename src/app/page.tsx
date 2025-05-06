import Navbar from "@/app/components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutAuthor from "./components/AboutAuthor";
import PublishedBooks from "./components/PublishedBooks";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PublishedBooks/>
      <AboutAuthor/>
    </>
  );
}
