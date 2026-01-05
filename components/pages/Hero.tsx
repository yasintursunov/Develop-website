"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/*  Низ: весь фон */}
      <div className="absolute inset-[-250] lg:inset-0 z-30 pointer-events-none" aria-hidden="true">
        <Image
          src="/hero-bg.png"
          alt="hero background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <h1
        className="absolute z-20 top-16 md:top-4 lg:top-6 right-0 md:-right-10 lg:-right-20 select-none pointer-events-none
          whitespace-nowrap font-medium leading-[0.55] text-[clamp(100px,22vw,500px)] tracking-[-0.02em]"
        aria-hidden="false"
        style={{
          color: "rgba(0,0,0,0.95)",
          mixBlendMode: "multiply",
          textShadow:
            "0 2px 0 rgba(255,255,255,0.25), 0 6px 18px rgba(0,0,0,0.18)",
        }}
      >
        Sabum
      </h1>
    

      {/*<div className="relative z-40 h-full flex items-center px-6 md:px-10">
        <div className="max-w-xl">
          <p className="inline-block bg-white/75 px-3 py-1 rounded-md text-sm text-slate-700 mb-4">
            Новая городская недвижимость
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900">
            Современные квартиры в центре
          </h2>
          <p className="mt-4 text-slate-600">
            Короткое описание проекта — преимущества, инфраструктура, удобство.
          </p>
        </div>
      </div> */}
      
    </section>
  );
}
