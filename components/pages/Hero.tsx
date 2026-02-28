"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import TextTranslate from "../animations/TextTranslate";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current || !lensRef.current) return;

    const container = containerRef.current;
    const lens = lensRef.current;

    // Başlangıç ayarları
    gsap.set(lens, { xPercent: -50, yPercent: -50, scale: 0 });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Merceğin hareketi
      gsap.to(lens, {
        x: clientX,
        y: clientY,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
      });

      // Hafif bir perspektif kayması (parallax değil, sadece derinlik)
      gsap.to(".reveal-image", {
        x: (clientX / window.innerWidth - 0.5) * 30,
        y: (clientY / window.innerHeight - 0.5) * 30,
        duration: 1.5,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = () => gsap.to(lens, { scale: 1, duration: 0.5 });
    const handleMouseLeave = () => gsap.to(lens, { scale: 0, duration: 0.5 });

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden ">
      <div className="absolute inset-0 z-0 overflow-hidden ">
        <Image
          src="/1.png"
          alt="background"
          fill
          priority
          className="object-cover scale-105 blur-md"
        />
      </div>

       <div className="relative z-50 h-full w-full flex flex-col justify-center items-end px-6 md:px-20 ">
        <TextTranslate y="50%" durationIn="1.5" delay="0.2">
        <h1 className="font-black text-[clamp(60px,18vw,300px)] leading-[0.75] tracking-[-0.05em] text-[rgb(var(--color-primary))]/25 border-text">
          DEVELOP 
          <TextTranslate y="50%" durationIn="1.5" delay="0.4"><span className="inline-block transform translate-x-4 md:translate-x-82">
            DIGITAL
          </span>
          </TextTranslate>
        </h1>
        </TextTranslate>
        <TextTranslate y="100%" durationIn="1.5" delay="0.6">
        <h1 className="font-black text-[clamp(50px,16vw,250px)] leading-[0.75] tracking-[-0.05em] text-[rgb(var(--color-primary))]/20 border-text">
          AGENCY
        </h1>
        </TextTranslate>
      </div> 

      <style jsx>{`
        .border-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
        }`}
        </style>

    </section>
  );
}