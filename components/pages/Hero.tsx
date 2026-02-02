"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      <div className="absolute inset-0 z-30 pointer-events-none" aria-hidden="true">
        <Image
          src="/1.png"
          alt="hero background"
          fill
          priority
          className="object-cover object-center"/>
      </div>

      <h1
        className="absolute z-20 top-16 md:top-4 right-0 md:-right-10 lg:-right-20 select-none pointer-events-none
          whitespace-nowrap font-medium leading-[0.55] text-[clamp(10px,20vw,500px)] tracking-[-0.02em]"
        aria-hidden="false"
        style={{
          color: "rgba(72,98,132,0.95)",
          mixBlendMode: "multiply",
        }}>
        My Home
      </h1>
    </section>
  );
}