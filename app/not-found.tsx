"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function NotFound() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const shapesRef = useRef<HTMLDivElement[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      
      gsap.from(contentRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      
      shapesRef.current.forEach((shape) => {
        gsap.to(shape, {
          x: "random(-100, 100)",
          y: "random(-100, 100)",
          rotation: "random(-360, 360)",
          duration: "random(10, 20)",
          repeat: -1,
          yoyo: true,
          ease: "none",
        });
      });

      
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5);
        const yPos = (clientY / window.innerHeight - 0.5);

        gsap.to(".parallax-content", {
          x: xPos * 30,
          y: yPos * 30,
          duration: 1,
          ease: "power2.out",
        });

        gsap.to(".parallax-bg", {
          x: -xPos * 60,
          y: -yPos * 60,
          duration: 1.5,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, [mounted]);

  const addToShapes = (el: HTMLDivElement | null) => {
    if (el && !shapesRef.current.includes(el)) {
      shapesRef.current.push(el);
    }
  };

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[rgb(var(--color-background))] text-white overflow-hidden font-poppins"
    >
      
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            ref={addToShapes}
            className="parallax-bg absolute border border-[rgb(var(--color-primary))] rounded-full"
            style={{
              width: `${(i + 1) * 150}px`,
              height: `${(i + 1) * 150}px`,
              left: `${Math.floor(Math.random() * 80)}%`, 
              top: `${Math.floor(Math.random() * 80)}%`,
            }}
          />
        ))}
      </div>

      
      <div ref={contentRef} className="parallax-content relative z-10 text-center px-6">
        <div className="relative inline-block">
          <h1 className="text-[150px] md:text-[250px] font-black tracking-tighter leading-none select-none text-[rgb(var(--color-primary))] mix-blend-difference">
            404
          </h1>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-black scale-x-125 -rotate-12 opacity-80 shadow-[0_0_15px_rgb(var(--color-primary))]" />
        </div>

        <div className="max-w-xl mx-auto -mt-8 md:-mt-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 uppercase tracking-[0.2em] text-[rgb(var(--color-primary))]">
             Are you lost?
          </h2>
          <p className="text-gray-400 text-sm md:text-base mb-10 leading-relaxed font-light">            
                It seems you've fallen into a dark corner of the digital universe.
                You can teleport to the safe zone using the button below.
          </p>

          <Link
            href="/"
            className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-[rgb(var(--color-primary))] transition-all duration-300 bg-transparent 
            border-2 border-[rgb(var(--color-primary))] rounded-full hover:shadow-[0_0_20px_rgb(var(--color-primary))]"
          >
            <span className="relative z-10 uppercase tracking-widest text-xs">Go To Home</span>
          </Link>
        </div>
      </div>

      
      <div className="absolute top-10 left-10 text-[10px] tracking-[0.8em] opacity-30 uppercase vertical-text hidden md:block text-[rgb(var(--color-primary))]">
        System_Failure // Lost_Data
      </div>
      
      <div className="absolute bottom-10 right-10 text-[10px] tracking-[0.8em] opacity-30 uppercase hidden md:block text-[rgb(var(--color-primary))]">
        Develop Digital Agency
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
}