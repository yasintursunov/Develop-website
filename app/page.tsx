// components/Hero.jsx
import Hero from "@/components/pages/Hero";
import NewsSlider from "@/components/pages/News";
import Parallax from "@/components/pages/Parallax";
import Projects from "@/components/pages/Projects";
import Image from "next/image";
import NewsPage from "./news/page";
import { getAllNews } from "@/lib/data";

export default function HeroPage() {
  const news = getAllNews();
  return (
    <div>
      <Hero/>
      <Parallax/>
      <Projects/>
      <NewsSlider items={news} autoplay interval={4000} />
    </div>
    
  );
}
